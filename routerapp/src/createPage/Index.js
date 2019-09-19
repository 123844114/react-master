import React, { Component } from 'react'
import {connect} from 'react-redux';
import Ul from './components/Ul'
import Add from './components/Add'
class Index extends Component {
  render() {
      let {pagedata} = this.props;
    //   console.log(pagedata);
    return (
      <div>
          <h2><Add type={'new'} /> 新页面</h2>
          <Ul data={pagedata}/>
      </div>
    )
  }
}

export default connect(
    (state)=>{
        return state.page
    },
    ()=>{
        return {}
    }
)(Index);
