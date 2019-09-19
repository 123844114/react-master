import React, { Component } from 'react'
import {connect} from 'react-redux';
class Add extends Component {
  render() {
      let {type,id} = this.props;
      return <span className="add" onClick={()=>{
            
      }}>+</span>
  }
  addpage=()=>{

  }
}


export default connect(
  
)(Add);