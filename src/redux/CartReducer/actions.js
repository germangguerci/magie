import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

<<<<<<< HEAD:src/redux/actions.js
export const GET_ALL_SHOP_ITEMS = "getAllShopItems"
export const CREATE_CUSTOMER = "createCustomer"
=======
export const GET_ALL_SHOP_ITEMS = "getAllShopItems";
export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_QUANTITY_IN_CART = "increaseQuantityInCart";
export const DECREASE_QUANTITY_IN_CART = "decreaseQuantityInCart";
>>>>>>> 701fdee577aad2b8a6f5a565535a89186b0bb088:src/redux/CartReducer/actions.js

export const api = new WooCommerceRestApi({
    url: "http://magiosbootcamp.ml/",
    consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
    consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
    version: "wc/v3"
  });



  
export const getAllShopItems = () =>{
    return function(dispatch){
        return api.get("products",{per_page: 90,})
        .then((response) => {
          console.log(response);
          dispatch({
            type: GET_ALL_SHOP_ITEMS,
            payload: response,
        })
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
}

<<<<<<< HEAD:src/redux/actions.js
/* const TESTINGDATA = {
  email: "john.doe@example.com",
  first_name: "John",
  last_name: "Doe",
  username: "john.doe",
  password: "8V91PhV6SMGBx(ht6hB231!N"
}

export const createCustomer = () => {
  return (dispatch) => {
    return api.post("customers", TESTINGDATA)
    .then((response) => {
      console.log(response);
      dispatch({
        type: CREATE_CUSTOMER,
        payload: response
      })
    })
    .catch((error) => {console.log("Create customer error: ", error)})
  }
}
 */
=======
export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
};

export const increaseQuantityInCart = id => {
  return {
    
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
};
>>>>>>> 701fdee577aad2b8a6f5a565535a89186b0bb088:src/redux/CartReducer/actions.js
