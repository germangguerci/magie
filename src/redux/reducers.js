import { combineReducers } from 'redux'
import storeReducer from './storeReducer/reducer'
//import counter from './storeReducer/counter'

const rootReducer = combineReducers(
    {
        storeReducer,
    }
)

export default rootReducer;