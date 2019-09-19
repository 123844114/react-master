let num = (state=0,action)=>{
    switch(action.type){
        case 'ADD':
        state += action.count;
        return state;
        case 'DIS':
        state -= action.count;
        return state;
        default :
        return state;
    }
}

export default num;