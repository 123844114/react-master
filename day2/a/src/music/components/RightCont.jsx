import React,{Component} from 'react';
class RightCont extends Component{
    render(){
        let {title} = this.props;
        return <div className="rightcont">
            <p className="showTitle">{title}</p>
        </div>
    }
}

export default RightCont;