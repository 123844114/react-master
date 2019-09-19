import React,{Component} from 'react';
import Detail from './detail';
import axios from 'axios';
class List extends Component{
    state = {
        list:[],
        open:false,
        studentId:null
    }
    render(){
        let {list,open} = this.state;
        return <div className="listbox">
            <ul>
                {
                    list.map((item,i)=>{
                        return <li key={i} onClick={()=>{
                            this.setState({studentId:item.exam_student_id,open:true})
                        }}>
                            <p>{item.student_name}</p>
                        </li>
                    })
                }
            </ul>
            {open ? <Detail id={this.state.studentId} close={this.close} /> : null}
        </div>
    }
    componentDidMount(){
        this.getListdata();
    }
    getListdata(){
        let token = localStorage.getItem('token');
        axios.get('/exam/student',{
            params:{
                page:1,
                pageSize:131
            },
            headers:{
                Authorization:token
            }
        }).then(res=>{
            this.setState({list:res.data.exam})
        })
    }
    close = ()=>{
        this.setState({open:false});
    }
}

export default List;