import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as examAction from '../store/exam/exam.action'
import '../css/style.css'
//只显示一道题
class Exam extends Component { 
  render() {  
      let {examCurData,dialog} = this.props;
    return <div>
        <header>{examCurData.title}</header>
        <ul>
            {
                examCurData.item && examCurData.item.map((item)=><li 
                    key={item.id}
                    onClick={this.selectRadio.bind(this,item.id)}>
                    <span className={`radio ${
                        examCurData.response===item.id?'active':''
                        } ${
                            (examCurData.successResponse===item.id && examCurData.open)?'successActive':''
                            }`}></span>
                    {item.title}
                </li>)
            }
        </ul>
        <div>
            <button onClick={this.changeItem.bind(this,false)}>上一题</button>
            <button onClick={()=>{
                this.props.success()
            }}>提交</button>
            <button onClick={this.changeItem.bind(this,true)}>下一题</button>
        </div>
        {dialog.open && <div className="dialog">
            <p>答对：{dialog.n}</p>
            <p>所用时间：{dialog.time}</p>
        </div>}
      </div>
    
  }
  componentDidMount(){
      this.props.getdata('/api/getItem');
  }
  changeItem(flag){
      let {index,examCurData:{open}} = this.props;
     //上一题是false
     //下一题是true
     if(open || !flag){
        this.props.changeItem(flag?index+1:index-1)
     }
     
  }
  selectRadio(id){
      //id选择的答案id  
      //index 当前题的下标 
      let {index,examCurData:{open}} = this.props;
      if(open){return}
      this.props.selectRadio(id,index+1);
  }
}


export default connect(
    (state)=>{
        return state.exam;
    },
    dispatch=>bindActionCreators(examAction,dispatch)
)(Exam);