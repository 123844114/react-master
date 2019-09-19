import {ININ_GETBRAND,ININ_GETCAR,CHANGE_BRAND,CHANGE_TYPE} from './car.actionType';


const stateinit = {
    brandId:"-1",
    brandData:[],
    typeId:"-1",
    typeData:[],
    allData:[],
    selectDate:[]//筛选结果数据
}

const car = (state=stateinit,action)=>{
    console.log(action);
    switch(action.type){
        case ININ_GETBRAND:
            state.brandData = action.brand
            return {...state}
        case ININ_GETCAR:
            state.allData = action.car
            state.selectDate = action.car;
            return {...state}
        case CHANGE_BRAND:
            state.brandId = action.brandId;
            state.selectDate = action.brandId==="-1" ? state.allData : state.allData.filter(item=>item.brandId === action.brandId);
            state.typeData = action.typeData;
            return {...state}
        case CHANGE_TYPE:
            state.typeId = action.typeId;
            state.selectDate = (action.typeId==="-1") ? (state.allData.filter(item=>item.brandId === state.brandId)) : (state.allData.filter(item=>item.brandId === state.brandId && action.typeId===item.typeId));
            return {...state}
        default :
            return state;
    }
    
}


export default car;