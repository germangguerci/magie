import { GET_ALL_SHOP_ITEMS, GET_CATEGORIES_SHOP, GET_PRODUCTS_PER_PAGE, GET_PRODUCTS_PER_PAGE_AND_CATEGORY , PRODUCT_NAME} from './actions';


const initialState = {
    productList: [],
    productCategories: [],
    totalProducts: 0,
    itemSearch: ""

}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_SHOP_ITEMS:{
            return {
              ...state,
              productList: action.payload,
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
        case PRODUCT_NAME:{
            return{
                ...state,
                itemSearch: action.payload
            }
        }
        default: return state;
    }
}