import React,{Component} from 'react';
import Slide from './components/slide';

class Wrap extends Component{
    state ={
        list:[{
            title:'暗黑系多肉'
        },
        {
            title:'暗黑系多彩'
        },
        {
            title:'光明系多彩'
        },{
            title:'光明系多彩'
        },{
            title:'光明系多彩'
        },{
            title:'光明系多彩'
        }]
    }

    render(){
        let {list} = this.state;
        return <div className="wrap">
            <Slide list={list}/>
        </div>
    }
}

export default Wrap