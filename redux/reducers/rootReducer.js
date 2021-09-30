import {combineReducers} from 'redux'
import userReducer from './userReducer'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'

const rootReducer = combineReducers({
    user : userReducer,
    cities: citiesReducer,
    itineraries : itinerariesReducer
})

export default rootReducer