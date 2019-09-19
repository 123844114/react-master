import React,{Component} from 'react';
import axios from 'axios';
class Login extends Component{
    state = {
        username:"",
        pwd:""
    }
    render(){
        let {username,pwd} = this.state;
        return <div className="loginbox">
                <form>
                    <input type="text" placeholder="请输入用户名" value={username} onChange={(e)=>{this.setState({username:e.target.value})}}/>
                    <input type="password" placeholder="请输入密码" value={pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}} />
                    <button type="button" onClick={()=>{
                        this.login();
                    }}>登陆</button>
                </form>
        
        </div>
    }
    login(){
        let {username,pwd} = this.state;
        let {setListOpen} = this.props;
        if(username.trim()==='' || pwd.trim()===''){
            return ;
        }
        axios.post('/user/login',{
            user_name:username,
            user_pwd:pwd
        }).then(res=>{
            let {code,msg} = res.data;
            if(code){
                //登陆成功
                console.log(code);
                localStorage.setItem('token',res.data.token);
                //修改listopen
                setListOpen();
                return;
            }
            alert(msg);
        })
    }
}

export default Login;