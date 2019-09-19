import {createStore,combineReducers} from 'redux';
import page from './createpage/createpage.reducer'

export default createStore(combineReducers({
    page
}))