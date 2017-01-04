import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import inputFilterReducer from './inputFilter'
import dateFilterReducer from './dateFilter'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    inputFilter: inputFilterReducer,
    dateFilter: dateFilterReducer
})
