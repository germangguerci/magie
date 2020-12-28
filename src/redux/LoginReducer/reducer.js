import {SIGN_IN} from './actions'

const initialState = {
    email: "",
    password: "",
    token: ""
}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case SIGN_IN:{
            return {
              ...state,
              email: action.payload.email,
              password: action.payload.password,
              token: action.payload.token
            };
        }
        default: return state;
    }
} 