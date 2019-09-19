import React, { Component } from 'react'
import {connect} from 'react-redux';
import shopAction from '../store/shopcar/shopcar.action'
import {bindActionCreators} from 'redux';
class CheckBtn extends Component {
  render() {
      let {isCheck,groupIndex,itemIndex} = this.props;
    return <span className={`checkbtn ${isCheck?'active':''}`} onClick={()=>{
      this.changeCheck(groupIndex,itemIndex)
    }}></span>
  }
  changeCheck(groupIndex,itemIndex){
    let {isCheck,changeCheck} = this.props;
    changeCheck(!isCheck,groupIndex,itemIndex);
  }
}
const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch)=>bindActionCreators(shopAction,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(CheckBtn);
