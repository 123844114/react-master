import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import routes from './routerSettings';
import RouterView from './routerView';

class Router extends Component{
    render(){
        return <BrowserRouter>
            <RouterView routes={routes}/>
        </BrowserRouter>
    }
}

export default Router;