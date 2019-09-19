import {BrowserRouter,Route} from 'react-router-dom';
import React,{Component} from 'react';
import Index from '../views/index';
import Exam from '../views/exam';

class RouterConfig extends Component{
    render(){
        return <BrowserRouter>
            <Route path={'/'} component={Index} exact></Route>
            <Route path={'/exam'} component={Exam} exact></Route>
        </BrowserRouter>
    }
}

export default RouterConfig;