import { GET_ALL_SHOP_ITEMS, SET_LOADING, SET_ERROR, IS_LOADED, GET_CATEGORIES_SHOP } from './actions';


const initialState = {
    productList: [],
    productCategories: [],
    loading: false,
    loaded: false,
    error: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_SHOP_ITEMS:{
            return {
              ...state,
              productList: action.payload,
              loading: false,
            };
        }
        case GET_CATEGORIES_SHOP:{
            console.log("entre el reducer")
            return{
                ...state,
                productCategories: action.payload
            }
        }
        case SET_LOADING : return{
            ...state,
            loading : !state.loading
        }
        case SET_ERROR : return{
            ...state,
            loading : false,
            error: true,
        }
        case IS_LOADED: return{
            ...state,
            loaded : true,
        }
        default: return state;
    }
}