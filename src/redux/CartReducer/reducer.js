// import { GET_ALL_SHOP_ITEMS, ADD_TO_CART, REMOVE_FROM_CART } from './actions';


// const initialState = {
//     productList: [],
//     productsInCart: []
// }

// export default function rootReducer(state = initialState, action) {
//     switch (action.type){
//         case GET_ALL_SHOP_ITEMS:{
//             //console.log(action.payload)
//             return {
//               ...state,
//               productList: action.payload
//             };
//         }
//         case ADD_TO_CART:
//             productsInCart.map(product => {
//                 if (product.id === action.payload.id) {
//                     return {
//                         ...state,
//                         productsInCart: [...productsInCart, productsInCart[product] = {...product, quantityInCart: quantityInCart + 1}]
//                     }
//                 }
//             })
//             return {
//                 ...state,
//                 productsInCart: state.productsInCart.concat({...action.payload, quantityInCart: 1})
//             };
//         case REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 productsInCart: state.productsInCart.filter(product => product.id !== action.id)
//             };
//         default: return state;
//     }
// }