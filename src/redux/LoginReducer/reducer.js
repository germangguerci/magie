import {SIGN_IN} from './actions'

const initialState = {
    loggedin: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case SIGN_IN:{
            console.log("SIGN_IN", action.payload.loggedin)
            return {
              ...state,
              loggedin: action.payload.loggedin,
            };
        }
        default: return state;
    }
} 