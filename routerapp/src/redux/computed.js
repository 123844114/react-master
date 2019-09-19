import React, { Component } from 'react'
import {connect} from 'react-redux';
class Computed extends Component {
  constructor(props){
    super(props);
  }
  render() {
      let {num} = this.props;
    return (
      <div>
        <button onClick={this.changeNum.bind(this,false)}>-</button>
        <span>{num}</span>
        <button onClick={this.changeNum.bind(this,true)}>+</button>
      </div>
    )
  }
  changeNum(flag){
    let type =  flag ? 'ADD' : 'DIS'
    this.props.changenum({type,count:2})
  }
}
const mapStateToProps = (state)=>{
    return {num:state.num};
}
const mapDispatchToProps = (dispatch)=>{
    return {
      changenum(obj){
        dispatch(obj); //reducer
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Computed);