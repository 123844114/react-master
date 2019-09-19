// import {createStore} from 'redux';
import list from './listStore';
import num from './numstore';
import {createStore,combineReducers} from 'redux';

let reducer = combineReducers({
    num,list
});
//{num:0,list:[]}
// let reducer = (state={num:0,list:[]},action)=>{  //1。参数 2.返回值 3.什么时候调用 
//     //1.state 默认状态 action 要执行的操作
//     // console.log(state);
//     // 4.作用  处理数据返回最新状态
//     // 3.什么时候调用 dispatch createStore 
//     // 2.返回值就是store.getState的结果
//     return {
//         num:num(state.num,action),
//         list:list(state.list,action)
//     }
// }

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //创建仓库 reducer  默认state
window.store = store;
export default store;

//store.subscribe() 监听/订阅 监听state发生改变
//combineReducers合并reducer  
// console.log(1,store.getState()); 
// //store.getState 获取最新状态 reducer的返回值

// //dispatch 派遣/触发 可以触发reducer函数  调用的时候传递action 

// store.dispatch({type:'ADD',count:10})  //

// console.log(2,store.getState()); 

// store.dispatch({type:'DIS',count:20})  //

// console.log(3,store.getState()); 

// store.dispatch({type:'ADD',count:100})  //

// console.log(4,store.getState()); 




