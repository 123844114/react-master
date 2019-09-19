import React,{Component} from 'react'
import {Topbox} from './components/top';
import Bottombox from './components/bottom';
class Index extends Component{
    state = {
        title:'京东JD.COM 官网 多快好省 只为品质生活'
    }
    render(){
        let {title} = this.state;
        return <div className="index">
            <Topbox />
            <Bottombox />
        </div>
    }
}

export default Index;