import React,{Component} from 'react';
import islogin from '../util/islogin';
class Index extends Component{
    render(){
        console.log(this.props);
        return <div>
           <p>欢迎{this.props.user}</p>
        </div>
    }
}

export default islogin(Index)();