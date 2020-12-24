import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY_IN_CART, 
         DECREASE_QUANTITY_IN_CART, NO_STOCK } from './actions';


const initialState = {
    productsInCart: JSON.parse(localStorage.getItem("Cart" ) || "[]")
}

export default function cartReducer(state = initialState, action) {
    switch (action.type){
        case ADD_TO_CART:
        case REMOVE_FROM_CART:
        case INCREASE_QUANTITY_IN_CART:
        case DECREASE_QUANTITY_IN_CART:
        case NO_STOCK:
            return {productsInCart: action.newCart};
        default: 
            return state;
    }
}