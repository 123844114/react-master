import axios from 'axios';
import '../../mock/index';
import {ININ_GETBRAND,ININ_GETCAR,CHANGE_BRAND,CHANGE_TYPE} from './car.actionType';
export const getdata = {
    getBrand(){  //获取品牌数据
        return (dispatch)=>{
            axios.get('/car/brand').then(res=>{
                dispatch(
                    {
                        type:ININ_GETBRAND,
                        brand:res.data
                    }
                )
            })
        }
    },
    getAllcar(){ //获取所有车的数据
        return (dispatch)=>{
            axios.get('/car/all').then(res=>{
                dispatch(
                    {
                        type:ININ_GETCAR,
                        car:res.data
                    }
                )
            })
        }
    }
}

export const change = {
    changeBrandID(brandId){ //select状态发生变化
        return (dispatch)=>{
            axios.post('/car/type',{
                brandId
            }).then(res=>{
                dispatch({
                    type:CHANGE_BRAND,
                    brandId,
                    typeData:res.data
                })
            })
        }
    },
    changeTypeID(typeId){
        return {
            type:CHANGE_TYPE,
            typeId
        }
    }
}