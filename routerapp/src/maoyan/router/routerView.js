import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import propTypes from 'prop-types';
class RouterView extends Component{
    static propTypes = {
        routes:propTypes.array
    }
    static defaultProps = {
        routes:[]
    }
    render(){
        let {routes} = this.props;
        // console.log(routes);
        let redirectArr = routes.filter(item=>item.redirect);
        let redirectCompoent = redirectArr.map((item,i)=><Redirect key={i} from={item.path} to={item.redirect}></Redirect>)
        return <Switch>
            {
                routes.map((item,i)=>!item.redirect && <Route key={i} path={item.path} component={(props)=><item.component routes={item.children} router={props} />}></Route>).concat(redirectCompoent)
            }
    </Switch>
    }
}


export default RouterView;