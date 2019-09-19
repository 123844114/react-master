import React, { Component } from 'react'
import {connect} from 'react-redux';
import shopAction from '../store/shopcar/shopcar.action'
import {bindActionCreators} from 'redux'
class Computed extends Component {
  render() {
      let {count,groupIndex,itemIndex} = this.props;
    return (
      <div>
          <button onClick={this.changeCount.bind(this,false,groupIndex,itemIndex)}>-</button>
          <span>{count}</span>
          <button onClick={this.changeCount.bind(this,true,groupIndex,itemIndex)}>+</button>
      </div>
    )
  }
  changeCount(flag,groupIndex,itemIndex){
      let {count,changeCount} = this.props;
      count = flag ? count+1 : count-1;
      if(count <= 1){
        count = 1;
      }
      changeCount(count,groupIndex,itemIndex);
  }
}
const mapStateToProps = (state)=>{
    // console.log(state);
    return {}
}
const mapDispatchToProps = (dispatch)=>bindActionCreators(shopAction,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Computed);
