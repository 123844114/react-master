import React,{Component} from 'react';

class Index extends Component{
    render(){
        let {history:{push}} = this.props;
        return <div className="indexbox">
            <div className="banner">
                <img src="" />
            </div>
            <div className="main">
                <button onClick={()=>{
                    push('/exam')
                }}>顺序练习</button>
                <button>顺序练习</button>
                <button>顺序练习</button>
                <button>顺序练习</button>
                <button>顺序练习</button>
                <button>顺序练习</button>
            </div>
        </div>
    }
}

export default Index;

