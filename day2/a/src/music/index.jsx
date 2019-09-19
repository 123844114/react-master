import React,{Component} from 'react';
import LeftCont from './components/LeftCont';
import RightCont from './components/RightCont';
import data from './mock/data';
import Context from './util/context';  //静态
import {BUTTON_CHANGE,Watch} from './util/bus';
import './css/style.css';
class Index extends Component{
    constructor(porps){
        super(porps);
        this.state = {data,title:''};
    }
    render(){
        let {data,title} = this.state;
        return <div className="index">
            <Context.Provider value={data}>
                <LeftCont />
            </Context.Provider>
            <RightCont title={title}/>
        </div>
    }
    componentDidMount(){
        document.addEventListener('keyup',this.keyup)
        Watch.on(BUTTON_CHANGE,(item)=>{
            this.keyup(item);
        })
    }
    componentWillUnmount(){
        document.removeEventListener('keyup',this.keyup)
    }
    keyup = (e)=>{
        let {data} = this.state;
        let res = data.find(item=>item.keyCode===e.keyCode);
        let timer = null;
        if(res){
            res.open = true;
            this.setState({data,title:res.title})
            clearTimeout(timer);
            timer = setTimeout(()=>{
                res.open = false;
                this.setState({data})
            },200);
        }
    }
}

export default Index;