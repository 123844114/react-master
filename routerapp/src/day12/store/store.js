import {createStore,combineReducers} from 'redux';
import login from './login';

const reducer = combineReducers({
    login
})


const store = createStore(reducer);
export default store;