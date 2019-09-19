let state = {
    name:'zs',
    list:[
        {
            name:'ww',
            age:15
        },
        {
            name:'ls',
            age:14
        }
    ]
}

let newstate = {...state,list:[...state.list]}; //{name:'zs',list:[],list:[...state.list]}

console.log(newstate.list===state.list);
console.log(newstate.list);

