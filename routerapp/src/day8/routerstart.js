import {BrowserRouter,Route} from 'react-router-dom';
import React,{Component} from 'react';
import Index from './views/index.jsx';
import List from './views/list.jsx';
import Detail from './views/detail.jsx';
// console.log(Index);
class RouterStart extends Component{
    render(){
        return <BrowserRouter>
            <Route path={"/"} component={Index} exact></Route>
            <Route path={"/list"} component={this.listRoute}></Route>
            <Route path={"/index"} render={(router)=>{console.log(router);return <Index/>}}></Route>
        </BrowserRouter>
    }
    listRoute = ({match})=>{  //
        // /list子路由
        const rootpath = match.path;
        return [<Route path={rootpath} component={List} exact key={1}></Route>,
                <Route path={rootpath+'/detail'} component={Detail} exact key={2}></Route>]
    }
}



export default RouterStart;


// class Route extends Component{
//     render(){
//         let {path,componet} = this.props;
//         return window.location.pathname === path && <componet />  
//     }
// }