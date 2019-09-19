import React,{Component} from 'react';
import '../css/style.css';
class MyDialog extends Component{
    state = {
        top:this.props.styleobj.top,
        left:this.props.styleobj.left,
    }
    render(){
        let {dialogdata,close,sure} = this.props;
        let {top,left} = this.state;
        return <div className="dialog" style={{top,left}} onMouseDown={this.mousedown.bind(this)}>
            <span className="close" onClick={()=>{close()}}>X</span>
            <h2>{dialogdata.title}</h2>
            <div>
                <button onClick={()=>{sure(dialogdata.index)}}>确定</button>
            </div>
        </div>
    }
    mousedown(e){
        let {clientX,clientY} = e;
        let {top,left} = this.state;
        this.startx = clientX - left;
        this.starty = clientY - top;
        document.addEventListener('mousemove',this.mousemove);
        document.addEventListener('mouseup',this.mouseup)
    }
    mousemove = (e)=>{
        let left = e.clientX - this.startx;
        let top = e.clientY - this.starty;
        this.setState({left,top});
    }
    mouseup = ()=>{
        document.removeEventListener('mousemove',this.mousemove)
        document.removeEventListener('mouseup',this.mouseup);
    }
}

MyDialog.defaultProps = {
    dialogdata:{
        title:'弹窗标题'
    },
    styleobj:{
        left:0,
        top:0
    }
}

export {MyDialog};