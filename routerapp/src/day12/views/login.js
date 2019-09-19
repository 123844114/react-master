import React,{Component} from 'react';
import store from '../store/store';
class Login extends Component{
    state = {
        user:'',
        pwd:''
    }
    render(){
        let {user,pwd} = this.state;
        return <div>
            <input type="text" placeholder="请输入用户名" value={user} onChange={(e)=>this.setState({'user':e.target.value})}/>
            <input type="text" placeholder="请输入密码" value={pwd} onChange={(e)=>this.setState({'pwd':e.target.value})}/>
            <button type="button" onClick={this.login.bind(this)}>登陆</button>
        </div>
    }
    login(){
        let {user,pwd} = this.state;
        store.dispatch({type:'ADD_USER',user,pwd})
        this.props.history.push('/');
    }
}

export default Login;