import React,{Component} from 'react';
import axios from 'axios';
class Detail extends Component{
    state = {
        list:[],
        name:''
    }
    render(){
        let {name,list} = this.state;
        let {close} = this.props;
        return <div className="mark" onClick={(e)=>{
            if(e.target === e.currentTarget){
                close();
            }
        }}>
            <div className="dialog">
                <h2>{name}</h2>
                <ul>
                    {
                        list.map((item,i)=>{
                            let {title,student_answer} = item;
                            // console.log(item);
                            return <li key={i}>
                                <p>题目:{title}</p>
                                <p>学生答案:{student_answer}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
    componentDidMount(){
        let {id} = this.props;
        let token = localStorage.getItem('token');
        axios.get(`/exam/student/${id}`,{
            headers:{
                Authorization:token
            }
        }).then(res=>{
            let {data} = res.data;
            this.setState({list:data.questions,name:data.student_name})
        })
    }
}

export default Detail;