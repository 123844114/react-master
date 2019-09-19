import React,{Component} from 'react';
import Login from './components/login';
import List from './components/list';
import './css/style.css';
class Index extends Component{
    state = {
        listopen:true
    }
    render(){
        let {listopen} = this.state;
        return <div className="contenbox"> 
           {listopen ? <List /> : <Login setListOpen={this.setListOpen} />} 
        </div>
    }
    setListOpen= ()=>{
        console.log(11);
        this.setState({listopen:true});
    }
}

export default Index;