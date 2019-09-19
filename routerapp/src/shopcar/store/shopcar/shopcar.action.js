import axios from 'axios';

export const INIT_DATA = 'INIT_DATA'  //初始化获取数据
export const CHANGE_COUNT = 'CHANGE_COUNT'  //点击加减改变数量
export const CHANGE_CHECK = 'CHANGE_CHECK'  //点击checkbox

export default {
    getdata:()=>{
        return (dispatch)=>{
            axios.get('/api/shopcar').then(res=>{
                dispatch({type:INIT_DATA,data:res.data.car});
            })
        }
    },
    changeCount(count,groupIndex,itemIndex){
        return {
            type:CHANGE_COUNT,
            count,
            groupIndex,
            itemIndex
        }
    },
    changeCheck(isCheck,groupIndex,itemIndex){
        return {
            type:CHANGE_CHECK,isCheck,groupIndex,itemIndex
        }
    }
}
