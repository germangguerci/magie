import { combineReducers } from 'redux'
import storeReducer from './storeReducer/reducer'
import cartReducer from './CartReducer/reducer'
import loginReducer from './LoginReducer/reducer'
//import counter from './storeReducer/counter'

const rootReducer = combineReducers(
    {
        storeReducer,
        cartReducer,
        loginReducer
    }
)

export default rootReducer;