import React, { Component } from 'react'

const islogin = (Com)=>{
    return ()=>class extends Component{
        state = {
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            // console.log(this.props);
            return islogin && <Com routes={this.props.routes} router={this.props.router}/>
        }
        componentDidMount(){
            let {router} = this.props;
            let islogin = localStorage.getItem('user');
            // console.log(islogin);
            if(islogin){
                this.setState({islogin:true});
            }else{
                // console.log(router.history.replace);
                router.history.replace('/login');
            }
        }
    }
}

export default islogin;