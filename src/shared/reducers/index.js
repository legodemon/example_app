import { combineReducers } from 'redux'
import payment from './payment'
import time from './time'

export default combineReducers({
    payment,
    time
})