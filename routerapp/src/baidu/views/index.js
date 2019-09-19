import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom';
import Hbq from './hbq';
import Yxj from './yxj';
class Index extends Component {
    state = {
        navlist:[{
            title:'小女花不弃',
            id:1
        },{
            title:'英雄诀',
            id:2
        }]
    }
  render() {
    let {navlist} = this.state;
    console.log(this.props);
    return (
      <div>
          <nav>
              {
                  navlist.map(item=><NavLink to={{
                      pathname:'/index/'+item.id
                  }} key={item.id}>{item.title}</NavLink>)
              }
          </nav>
          <div>
              {/*匹配组合route中的第一个 */}
              {/* <Switch> */}
                <Route path="/index" render={()=><Redirect to={'/index/1'} />} exact ></Route>
                <Route path="/index/2" component={Yxj}></Route>
                <Route path="/index/1" component={Hbq}></Route>
             {/* </Switch> */}
          </div>
      </div>
    )
  }
}
export default Index;