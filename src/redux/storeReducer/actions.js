import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const GET_ALL_SHOP_ITEMS = "getAllShopItems"
export const SET_LOADING = "setLoading"
export const SET_ERROR = "setError"
export const IS_LOADED = "isLoaded"

const api = new WooCommerceRestApi({
    url: "http://magiosbootcamp.ml/",
    consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
    consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
    version: "wc/v3"
  });
  
export const getAllShopItems = () =>{
    return function(dispatch){
        return api.get("products",{per_page: 90, status: "publish",})
        .then((response) => {
          dispatch({
            type: GET_ALL_SHOP_ITEMS,
            payload: response.data,
        })
          dispatch({
            type: IS_LOADED,
          })
        })
        .catch((error) => {
          dispatch({type: SET_ERROR})
          console.log(error);
        });
    }
}


