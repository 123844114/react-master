const login = (state={},action)=>{
    switch(action.type){
        case 'ADD_USER':
        state.user = action.user
        return state;
        default:
        return state;
    }
    
}

export default login;