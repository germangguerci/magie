import { GET_ALL_SHOP_ITEMS, GET_CATEGORIES_SHOP, GET_PRODUCTS_PER_PAGE, GET_PRODUCTS_PER_PAGE_AND_CATEGORY } from './actions';


const initialState = {
    productList: [],
    productListCategory: [],
    productCategories: [],
    totalProducts: 0,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_SHOP_ITEMS:{
            return {
              ...state,
              totalProducts: action.payload,
            };
        }
        case GET_PRODUCTS_PER_PAGE:{
            return{
                ...state,
                productList: action.payload
            }
        }
        case GET_CATEGORIES_SHOP:{
            return{
                ...state,
                productCategories: action.payload
            }
        }
        case GET_PRODUCTS_PER_PAGE_AND_CATEGORY:{
            return{
                ...state,
                productList:action.payload
            }
        }
        default: return state;
    }
}