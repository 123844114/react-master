import React,{Component} from 'react';
// import Index from './day2/index';
// import Index from './day3-点赞/index';
// import Index from './day4/index';
// import Index from './day5/index';
// import Index from './day6/index';
// import Wrap from './zk/index';
// import Index from './music/index';
// import Index from './list/index';
// import LoginDialog from './components';
// import Indexdata from './connect/mock/data';
// import Index from './connect';
import Index from './propsSettiongs';
import Container from './propsSettiongs/utils/container'

class A extends Component{
    render(){
        return <div>aAAAA</div>
    }
}
class App extends Component{
    state = {
        n:1
    }
    render(){
        return <div id="app">
            <Index title={"1234"} p={<p>班级名称</p>} n={this.state.n} addGood={this.addGood} one={Symbol(11)} obj={<A />}/>
            {/* <LoginDialog title={"1610A"}/> */}
        </div>
    }
    addGood=()=>{   
        let {n} = this.state;
        this.setState({n:n+1})
    }
}

export default App;