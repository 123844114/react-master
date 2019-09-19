import React,{Component} from 'react';
class Zoombox extends Component{
    state = {
        moveleft:0,
        movetop:0,
        isshow:false
    }
    render(){
        let {imgurl,zoomboxStyle,zoom,markStyle,zoomBigStyle,bigPic} = this.props;
        let {isshow,moveleft,movetop} = this.state;
        return <div className="zoombox" style={{...zoomboxStyle}} onMouseEnter={this.mouseenter.bind(this)} onMouseLeave={this.mouseleave.bind(this)} onMouseMove={this.mousemove.bind(this)} ref="zoombox">
            <div className="zoomMark" style={{...markStyle,display:isshow?'block':'none',top:movetop,left:moveleft}}></div>
            <img src={imgurl} alt=""/>
            <div className="zoomBig" style={{...zoomBigStyle,display:isshow?'block':'none',backgroundImage:`url(${imgurl})`,backgroundPositionX:-moveleft*zoom,backgroundPositionY:-movetop*zoom,
            backgroundSize:bigPic.width+'px '+bigPic.height+'px'}}></div>
        </div>
    }
    mouseenter(){
        this.setState({isshow:true});
    }
    mousemove(e){
        let zoombox = this.refs.zoombox;
        let {markStyle,zoomboxStyle} = this.props;
        let left = e.clientX - zoombox.offsetLeft - markStyle.width / 2;
        let top = e.clientY - zoombox.offsetTop - markStyle.height / 2;
        let maxLeft = zoomboxStyle.width - markStyle.width;
        let maxTop = zoomboxStyle.height - markStyle.height;
        if(left <= 0){
            left = 0;
        }else if(left >= maxLeft){
            left = maxLeft;
        }
        if(top <= 0){
            top = 0;
        }else if(top >= maxTop){
            top = maxTop;
        }
        this.setState({moveleft:left,movetop:top});
    }
    mouseleave(){
        this.setState({isshow:false});
    }
}
Zoombox.defaultProps = {
    zoomboxStyle:{
        width:400,
        height:400
    },
    markStyle:{
        width:200,
        height:200
    },
    zoom:2,
    bigPic:{
        width:800,
        height:800
    },
    zoomBigStyle:{
        width:400,
        height:400,
        left:400
    }
}

export default Zoombox;