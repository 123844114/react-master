import axios from 'axios';
import '../mock/index';
import React,{Component} from 'react';
const getdata = (options)=>{
    //Com就是传过来的home组件
    return (Com)=>class extends Component{
        state = {
            data:'暂无数据'
        }
        render(){
            let {data} = this.state;
            return <Com data={data} route={{...this.props}}></Com>
        }
        componentDidMount(){
            let {method='get',params={},url} = options;
            axios[method](url,{
                params
            }).then(res=>{
                this.setState({data:res.data});
            })
        }
    }
}

export default getdata;


