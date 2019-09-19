import React,{Component} from 'react'
const iconurl = './image/jd.jpg'
class Topbox extends Component{
    render(){
        let {title} = this.props;
        return <div className="topbox">
            <h2>{title}</h2>
            <img src={iconurl} />
        </div>
    }
}
//设置默认props
Topbox.defaultProps = {
    title:'京东JD.COM 官网'
}
export {Topbox}; 