import React,{Component} from 'react'
class Bottombox extends Component{
    state = {
        btns:[{
            title:'家用电器'
        },{
            title:'手机'
        },{
            title:'电脑'
        },{
            title:'饰品'
        },{
            title:'衣服'
        }],
        index:0
    }
    render(){
        let {index,btns} = this.state;
        return <div className="bottombox">
            <div>
                {
                    btns.map((item,i)=><span key={i} style={{
                        background:'#eee',
                        display:'inline-block',
                        padding:'10px 20px',
                        borderTopColor:i===index ? 'skyblue' :'rgba(0,0,0,0)',
                        borderTopWidth:4,
                        borderTopStyle:'solid'
                    }} onClick={this.changeBtn.bind(this,i)}>{item.title}</span>)
                }
            </div>
        </div>
    }
    changeBtn(index){
        // console.log(index);
        // this.state.index = index;
        //setState修改组件状态 是一个异步方法！！！！
        //{}
        this.setState({index},()=>{
            console.log('回调'+this.state.index);
        })  //异步
        console.log('顺序'+this.state.index);  
    }
}

export default Bottombox;

