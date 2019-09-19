import React,{Component} from 'react';
import store from '../store/store'
const islogin = (Com)=>{
    return ()=>class extends Component{
        state = {
            islogin:false,
            user:''
        }
        render(){
            let {islogin,user} = this.state;
            return islogin && <Com router={{...this.props}} user={user}/>
        }
        componentDidMount(){
            let {user} = store.getState().login;
            if(user){
                this.setState({islogin:true,user})
            }else{
                this.props.history.replace('/login');
            }
        }
    }
}

export default islogin;