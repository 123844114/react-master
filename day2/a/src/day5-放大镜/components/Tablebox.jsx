import React,{Component} from 'react';
class Tablebox extends Component{
    state = {
        index:0
    }
    render(){
        let {data,callback} = this.props;
        let {index} = this.state;
        return <div className="tablebox">
            <span>&lt;</span>
            <div>
                <ul>
                    {
                        data.map((item,i)=><li key={i} style={{borderColor:index===i?'red':'transparent'}} onMouseEnter={()=>{
                            this.setState({index:i});
                            callback(i);
                        }}><img src={item.imgurl} /></li>)
                    }
                </ul>
            </div>
            <span>&gt;</span>
        </div>
    }
}

export default Tablebox;