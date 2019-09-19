import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom';

class RouterViews extends Component{
    static defaultProps = {
        routes:[]
    }
    render(){
        let {routes} = this.props;
        let redirect = routes.filter(item=>item.redirect).map((item,i)=><Redirect key={i} from={item.path} to={item.redirect}/>);
        return <Switch>
            {
                routes.map((item,i)=>!item.redirect && <Route key={i} path={item.path} component={(props)=>{
                    //props router对象
                    return React.createElement(item.component,{routes:item.children,...props});
                }}></Route>).concat(redirect)
            }
        </Switch>
    }
}

export default RouterViews;