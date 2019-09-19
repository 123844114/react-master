import axios from 'axios'
import '../../mock/index'

export const getdata = (url)=>{
    return (dispatch)=>{
        axios.get(url).then(res=>{
            dispatch({
                type:'INIT_DATA',
                examdata:res.data,
                starttime:Date.now()
            })
        })
    }
}   


export const selectRadio=(id,nextIndex)=>{
    return {
        type:'CHANG_NEXT',
        id,
        nextIndex
    }
}

export const changeItem=(newindex)=>{
    return {
        type:'CHANGE_ITEM',
        newindex
    }
}

export const success=()=>{
    return {
        type:'SUBMIT_ITEM',
        endtime:Date.now()
    }
}