import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as indexAction from './store/index/index.action'
import {bindActionCreators} from 'redux';

class Index extends Component {
  render() {
      let {classname,name} = this.props.indexstate;
    return (
      <div>
          <p>{classname}</p>
          <p>{name}</p>
          <button onClick={this.changeclass}>修改班级</button>
          <button onClick={this.changename}>修改名字</button>
          <button onClick={this.props.getdata}>获取数据</button>
      </div> 
    )
  }
  changeclass = ()=>{
      this.props.changeclass('1701C')
  }
  changename = ()=>{
      this.props.changename('ww')
  }
}

// function _bindActionCreators(obj,dispatch){
//     let res = {};
//     Object.keys(obj).forEach(item=>{
//       res[item] = (...n)=>{
//           dispatch(obj[item](...n)) //{type}
//       }
//     })
//     console.log(res);
//     return res;
// }

export default connect(
    (state)=>{
        return state;
    },
    (dispatch)=> bindActionCreators(indexAction,dispatch)
)(Index);