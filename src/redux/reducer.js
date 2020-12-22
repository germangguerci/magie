import { GET_ALL_SHOP_ITEMS } from './actions';


const initialState = {
    productList: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_SHOP_ITEMS:{
            //console.log(action.payload)
            return {
              ...state,
              productList: action.payload
            };
        }
        default: return state;
    }
}