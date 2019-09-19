import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import exam from './exam/exam.reducer'
const reducer = combineReducers({
    exam
})

const store = createStore(reducer,applyMiddleware(thunk));
window.store = store;
export default store;
