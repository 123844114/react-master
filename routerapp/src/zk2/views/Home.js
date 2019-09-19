import React, { Component } from 'react'
import getDataToWrap from '../components/getdatatowrap'
class Home extends Component {
  render() {
    let data = this.props.data;
    console.log(this.props);
    return (
      <div>
         {data==='暂无数据' ? data : <h2>{data.title}</h2>}
      </div>
    )
  }
}


export default getDataToWrap({
  url:'/api/home',
  params:{
    limit:20
  },
  method:'post'
})(Home)