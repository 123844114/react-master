import {createStore,combineReducers,applyMiddleware} from 'redux';
import cardata from './car/car.reducer'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

export default createStore(combineReducers({
    cardata
}),applyMiddleware(thunk,createLogger()))