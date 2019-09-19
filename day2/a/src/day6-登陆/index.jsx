import React, { Component } from 'react';
import axios from 'axios';
class Index extends Component {
    state = {
        username:'',
        pwd:'',
        sex:[{
            title:'男',
            id:0
        },{
            title:'女',
            id:1
        }],
        select:[{
            title:'北京',
        },{
            title:'上海',
        },{
            title:'天津',
        }],
        city:'',
        sexResult:''
    }
    render(){
        let {sex,select} = this.state;
        return <div>
            <form>
                <label htmlFor="username">请输入用户名</label>
                <input type="text" id="username" onChange={(e)=>{
                    this.setState({username:e.target.value});
                }} />
                <label htmlFor="password">请输入密码</label>
                <input type="password" id="password" onChange={(e)=>{
                    this.setState({pwd:e.target.value});
                }}/>
                {
                    sex.map((item,i)=><span key={i}><input type="radio" name="sex" value={item.title} onChange={(e)=>{
                        this.setState({sexResult:e.target.value});
                    }}/>{item.title}</span>)
                }
                <select onChange={(e)=>{
                    this.setState({city:e.target.value})
                }}>
                    <option disabled>请选择城市</option>
                    {
                        select.map((item,i)=><option key={i}>{item.title}</option>)
                    }
                </select>
                <button type="button" onClick={()=>{
                    this.adduser();
                }}>注册</button>
            </form>
        </div>
    }
    adduser(){
        let {username,pwd,sexResult,city} = this.state;
        console.log(username,pwd,sexResult,city)
        // axios.post('/api/login').then(res=>{
        //     console.log(res.data);
        // })
    }
}

export default Index;