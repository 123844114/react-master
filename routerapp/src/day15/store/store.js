import {createStore,combineReducers,applyMiddleware} from 'redux';
import indexstate from './index/index.reducer'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    indexstate
})

///{indexstate:{}}

export default createStore(reducer,applyMiddleware(thunk))