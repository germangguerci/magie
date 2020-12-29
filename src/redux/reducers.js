import { combineReducers } from 'redux'
import loginReducer from './LoginReducer/reducer'
//import counter from './storeReducer/counter'

const rootReducer = combineReducers(
    {

        loginReducer
    }
)

export default rootReducer;