import React, { Component } from 'react'

class Hotdetail extends Component {
  render() {
    let {router:{match:{params},history:{push}}} = this.props;
    return (
      <div>
          <header>详情</header>
          Hotdetail{params.id}
          <button onClick={()=>{
            push({
              pathname:'/position',
              state:{
                0:true
              }
            });
          }}>购票</button>
      </div>
    )
  }
}

export default Hotdetail;
