import {combineReducers} from 'redux'
import userReducer from './userReducer'
import citiesReducer from './citiesReducer'

const rootReducer = combineReducers({
    user : userReducer,
    cities: citiesReducer
})

export default rootReducer