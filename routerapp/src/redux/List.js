import React, { Component } from 'react'
import Item from './listComponent/Item';
import {connect} from 'react-redux';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }
  render() {
      let {text} = this.state;
      let {list} = this.props;
    return (
      <div>
          <input type="text" placeholder="请输入内容" value={text} onChange={(e)=>{
              this.setState({text:e.target.value})
          }} onKeyUp={this.addList.bind(this,text)}/>
          <div>
            {
                list.map((val,key)=><Item key={key} val={val.text} index={key}></Item>)
            }
          </div>
      </div>
    )
  }
  addList(text,ev){
    if(ev.keyCode === 13){
        this.props.addlist({type:'ADD_ITEM',text})
        this.setState({text:''});
    }
  }
}

export default connect((state)=>{
  return {list:state.list}
},(dispatch)=>{
  return {
    addlist(action){
      dispatch(action);
    }
  }
})(List);
