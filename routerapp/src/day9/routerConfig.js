import React,{Component} from 'react';
import {BrowserRouter,Route,Redirect,Link,NavLink} from 'react-router-dom';
//Router -> BrowserRouter -> HashRouter
import Index from './views/index';
import List from './views/list';
import Detail from './views/detail';

class RouterConfig extends Component{
    render(){
        return <BrowserRouter>
            <div>
                <Route path={'/'} render={()=><Redirect to={'/index'} />} exact />
                <Route path={'/index'} component={Index} exact></Route>
                <Route path={'/list'} component={List} exact></Route>
                <Route path={'/detail/:id'} component={Detail} exact></Route>
            <footer>
                <NavLink to={'/index'}>首页</NavLink>
                <NavLink to={'/list'} activeClassName="list">列表</NavLink>
            </footer>
            </div>
        </BrowserRouter>
    }
}

export default RouterConfig;