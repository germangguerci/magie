import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';


const initialState = {
    productsInCart: []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type){
        case ADD_TO_CART:
            let flag = false
            if (!state.productsInCart.length) {
                localStorage.setItem("Cart", JSON.stringify({...state, productsInCart: state.productsInCart.concat(action.payload)}));
                return {...state, productsInCart: state.productsInCart.concat(action.payload)}
            } 
            else if (state.productsInCart.length) {
                
                state.productsInCart.map((product, index) => {
                    if (product.id === action.payload.id) {
                        
                        console.log("Entra aca en comparar id");
                        console.log("State: ", state.productsInCart)
                        flag = true
                        let products = localStorage.getItem('Cart')
                        // if () {
                        //     products = JSON.parse( localStorage.getItem("Cart"))
                        // }
                        products = JSON.parse( localStorage.getItem("Cart"))
                        console.log("products =>",products)
                        // products.push({'productId' : productId + 1, image : '<imageLink>'});

                        // console.log("Item: ", itemRepeated[index])
                        products[index].quantityInCart += 1;

                        return localStorage.setItem("Cart",JSON.stringify(
                            products
                            // {
                            // // {...product, quantityInCart: product.quantityInCart++}
                            // productsInCart: [...state.productsInCart, {...product, quantityInCart: product.quantityInCart++}]}
                        ))

                    }
                    console.log("state: ", state.productsInCart);
                    
                }
            )
            if (!flag) {
                console.log(action.payload)
                return {
                    ...state, productsInCart: state.productsInCart.concat(action.payload)
                    //...state.productsInCart.push({...action.payload})
                };
            }
        } 
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(product => product.id !== action.id)
            };
        default: return state;
    }
    // function addProduct(){
    //     let products = [];
    //     if(localStorage.getItem('products')){
    //         products = JSON.parse(localStorage.getItem('products'));
    //     }
    //     products.push({'productId' : productId + 1, image : '<imageLink>'});
    //     localStorage.setItem('products', JSON.stringify(products));
    // }
}