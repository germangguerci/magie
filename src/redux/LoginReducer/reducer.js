import {SIGN_IN} from './actions'

const initialState = {
    loggedin: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case SIGN_IN:{
            return {
              ...state,
              loggedin: action.payload.loggedin
            };
        }
        default: return state;
    }
} 