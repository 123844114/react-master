import React,{Component} from 'react';
import {MyDialog} from './components/dailog';
class Index extends Component{
    state = {
        list:[
            {
                title:'苹果'
            },
            {
                title:'梨'
            }
        ],
        dialogOpen:false,
        dialogTitle:'',
        index:null
    }
    render(){
        let {list,dialogOpen,dialogTitle,index} = this.state;
        return <div>
            <ul>
                {
                    list.map((item,i)=><li key={i} onClick={()=>{
                        this.setState({dialogOpen:true,dialogTitle:item.title,index:i})
                    }}>{item.title}</li>)
                }
            </ul>
            {dialogOpen ? <MyDialog dialogdata={{
                title:`确定要删除${dialogTitle}吗？`,
                index:index
            }} styleobj={{
                left:10,
                top:10
            }} close={this.close.bind(this)}
            sure={this.sure.bind(this)}/> : null}
            
        </div>
    }
    close(){
        this.setState({dialogOpen:false})
    }
    sure(index){
        let {list} = this.state;
        list.splice(index,1);
        this.setState({dialogOpen:false,list});
    }
}

export default Index;