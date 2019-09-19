const person = {
    classname:'1610A',
    name:'周继愈'
}

const indexstate = (state = person,action)=>{
    switch(action.type){
        case 'CHANGE_CLASS':
            state.classname = action.classname;
            return {...state};
        case 'CHANGE_NAME':
            state.name = action.name;
            return {...state};
        case 'INIT_DATA':
            state = {...action.data,...person};
            return {...state};
        default :
            return state;
    }
    
}

export default indexstate;