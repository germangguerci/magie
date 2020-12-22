import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";


const composealgo = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,  composealgo(applyMiddleware(thunk))
); 

export default store;