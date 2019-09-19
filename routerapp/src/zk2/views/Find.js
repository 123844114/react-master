import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom';
import RouterView from '../router/routerView';
class Find extends Component {
  render() {
    let {routes} = this.props;
    return (
      <div>
         <header>
             <NavLink to={'/find/index'}>发现</NavLink>
             <NavLink to={'/find/like'}>关注</NavLink>
         </header>
         <main>
            <RouterView routes={routes}></RouterView>
         </main>
      </div>
    )
  }
}
export default Find;