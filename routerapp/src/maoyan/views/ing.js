import React, { Component } from 'react'
import RouterView from '../router/routerView'
class Ing extends Component {
  render() {
    let {routes,router:{history:{push}}} = this.props;
    let data = [1,2,3]
    return (
      <div>
          {
            data.map((item,i)=><p key={i} onClick={()=>{
              push('/detail/'+item);
            }}>今日头条{item}</p>)
          }

          {/* <RouterView routes={routes} /> */}
      </div>
    )
  }
} 
export default Ing;