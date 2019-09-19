import React, { Component } from 'react'
import {connect} from 'react-redux';
class Item extends Component {
  render() {
    return (
      <div onClick={()=>{
        this.props.delitem({type:'DEL_ITEM',index:this.props.index})
        //  store.dispatch({type:'DEL_ITEM',index:this.props.index})
      }}>
        {this.props.val}
      </div>
    )
  }
}
export default connect(()=>({}),dispatch=>{
  return {
    delitem(action){
      dispatch(action);
    }
  }
})(Item);