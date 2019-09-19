import React,{Component} from 'react';
import {BrowserRouter as RootRouter,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import RouterView from './routerView';
import routes from './routeSetting.jsx';
// console.log(routes);
class ZkRouter extends Component{
    render(){
        return <RootRouter>
            <RouterView routes={routes}/>
            <footer>
                <NavLink to={'/home'}>首页</NavLink>
                <NavLink to={'/type'}>分类</NavLink>
                <NavLink to={'/find'}>发现</NavLink>
            </footer>
        </RootRouter>
    }
}

export default ZkRouter;