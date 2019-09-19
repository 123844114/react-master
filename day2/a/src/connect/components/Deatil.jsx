import React, { Component } from 'react'
import connect from '../util/connect';
class Deatil extends Component {
  render() {
      let {data} = this.props;  
      console.log(this.props); //得到详情数据
    return (
      <div className="detail">
        
      </div>
    )
  }
}


export default connect((data)=>{
    return data['detailData']
})(Deatil);