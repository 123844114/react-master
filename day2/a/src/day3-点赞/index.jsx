import React,{Component} from 'react';
import Good from './views/good';
class Index extends Component{
    state = {
        list:[{
            good:0,
        },
        {
            good:1,
        },
        {
            good:0,
        }]
    }
    render(){
        let {list} = this.state;
        console.log(list);
        return <div>
            {
                list.map((item,i)=><div key={i}><Good num={item.good}
                addGood={this.addGood.bind(this)} index={i}
                /></div>)
            }
        </div>
    }
    addGood(index){
        let {list} = this.state;
        list[index].good++;
        this.setState({list});
    }
}

export default Index;