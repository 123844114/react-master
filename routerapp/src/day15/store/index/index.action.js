import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('/api/index',{
    title:'获取数据'
})




export const changeclass = (classname)=>{ //向props分发的方法
    //返回值就是dispatch的参数 action
    return {
        type:'CHANGE_CLASS',classname
    }
}


export const changename = (name)=>{
    return {
        type:'CHANGE_NAME',name
    }
}

export const getdata = ()=>{
    //返回值就是dispatch的参数 action
    return (dispatch,getstate)=>{
        axios.get('/api/index').then(res=>{
            dispatch({type:'INIT_DATA',data:res.data})
        })
    }
}


