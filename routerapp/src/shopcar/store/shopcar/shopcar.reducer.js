import {INIT_DATA,CHANGE_COUNT,CHANGE_CHECK} from './shopcar.action';
const shopcardefault = {

}

//计算总价
const reducePrice = (state)=>{
    return state.group.reduce((p,item)=>{
        return p + item.list.reduce((p,val)=>{
            val = val.itemCheck ? val.price * val.itemCount : 0;
            return p + val;
        },0)
    },0)
}
const shopcar = (state=shopcardefault,action)=>{
    switch(action.type){
        case INIT_DATA:
            action.data.allPrice = reducePrice(action.data);
            return {...action.data}  //{allCheck:false,....}
        case CHANGE_COUNT:
        {
            //数量
            let {groupIndex,itemIndex,count} = action;
            state.group[groupIndex].list[itemIndex].itemCount = count;
            state.allPrice = reducePrice(state);
            return {...state};
        }
        case CHANGE_CHECK: //全选 店铺 单选
        {
            //全选 groupindex 和 itemindex 为undefined
            let {groupIndex,itemIndex,isCheck} = action;
            if(groupIndex===undefined && itemIndex===undefined){
                //改自己
                state.allCheck = isCheck;
                //改店铺
                state.group.forEach(item=>{
                    item.groupCheck = isCheck;
                    item.list.forEach(val=>{
                        //改商品
                        val.itemCheck = isCheck;
                    })
                })
                //店铺 itemindex
            }else if(itemIndex===undefined){
                //改自己
                state.group[groupIndex].groupCheck = isCheck;
                //改商品
                state.group[groupIndex].list.forEach(val=>{
                    val.itemCheck = isCheck;
                })
                //改全选
                state.allCheck = state.group.every(item=>item.groupCheck);
            }else{
                //单选 
                state.group[groupIndex].list[itemIndex].itemCheck = isCheck;
                //改店铺
                state.group[groupIndex].groupCheck = state.group[groupIndex].list.every(item=>item.itemCheck);
                //改全选
                state.allCheck = state.group.every(item=>item.groupCheck);
            }
            //改变价格
            state.allPrice = reducePrice(state);
            return {...state};
        }
        default:
            return state;
    }
    
}

export default shopcar;