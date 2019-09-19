let list = (state=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
        state.push({text:action.text})
        return [...state];
        case 'DEL_ITEM':
        state.splice(action.index,1);
        return [...state];
        default :
        return state;
    }
}

export default list;