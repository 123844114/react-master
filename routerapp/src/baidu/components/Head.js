import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
//withRouter 是一个高阶组件
class Head extends Component {
  render() {
    let {history:{push}} = this.props;
    return (
      <header className="header">
            <button onClick={()=>{
                push('/index')
            }}>首页</button>
            <button onClick={()=>{
                push('/tv')
            }}>电视剧</button>
      </header>
    )
  }
}
export default withRouter(Head);