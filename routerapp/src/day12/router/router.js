import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Index from '../views/index';
import Login from '../views/login';

class Router extends Component{
    render(){
        return <BrowserRouter>
            <Route path="/" component={Index} exact></Route>
            <Route path="/login" component={Login} exact></Route>
        </BrowserRouter>
    }
}

export default Router;