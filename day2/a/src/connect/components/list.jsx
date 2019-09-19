import React, { Component } from 'react'
import connnect from '../util/connect';
class List extends Component {
  render() {
      let {data} = this.props;  
      console.log(this.props); //得到列表数据
    return (
      <div className="list">
        
      </div>
    )
  }
}


export default connnect((data)=>{
  return data['listData']
})(List);