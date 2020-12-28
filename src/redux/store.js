import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers.js";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'



const composealgo = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,  composealgo(applyMiddleware(thunk, promise))
); 

export default store;