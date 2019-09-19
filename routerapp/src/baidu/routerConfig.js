import React,{Component} from 'react';

import {BrowserRouter,Route,Redirect} from 'react-router-dom';

import Head from './components/Head';
import Content from './views/content';
import Index from './views/index';


class RouterConfig extends Component{
    render(){
        return <BrowserRouter>
            <Head />
            <Route path='/' render={()=><Redirect to="/index" />} exact></Route>
            <Route path="/index" component={Index} ></Route>
            <Route path="/tv" component={Content}></Route>
        </BrowserRouter>
    }
}

export default RouterConfig;