import React, { Component } from 'react'
import Foot from '../components/foot'
// import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import RouterView from '../router/routerView';
import islogin from '../util/islogin'

class Movie extends Component {
  render() {
     let {routes} = this.props;
     let {router:{history:{push}}} = this.props;
    return <div>
        <header>电影</header>
        <main>
            <nav>
                <button onClick={()=>{
                    push('/movie')
                }}>正在热映</button>
                <button onClick={()=>{
                    push('/movie/will')
                }}>即将上映</button>
            </nav>
            <div>   
                <RouterView routes={routes}/>
                {/* <Switch>
                    <Route path="/movie/will" component={Will}></Route>
                    <Route path="/movie/hot" component={Ing}></Route>
                    <Route path="/movie" render={()=><Redirect to={'/movie/hot'}></Redirect>}></Route>
                </Switch> */}
            </div>
        </main>
        <Foot/>
    </div>
  }
}

export default Movie;
