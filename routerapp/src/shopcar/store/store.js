import {createStore,combineReducers,applyMiddleware} from 'redux';
import shopcar from './shopcar/shopcar.reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
let reducer = combineReducers({
    shopcar
})
const logger = createLogger();
const store = createStore(reducer,applyMiddleware(thunk,logger));
// window.store = store;
//store {dispatch(){}}
// const next = store.dispatch;
// store.dispatch = (action)=>{
//     console.log(action);
//     if(typeof action === 'function'){
//         action(next);
//     }else{
//         next(action);
//     }
//     // next(action);
// }
export default store;



