import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const GET_ALL_SHOP_ITEMS = "getAllShopItems"
export const GET_PRODUCTS_PER_PAGE = 'getItemsPerPage'
export const GET_CATEGORIES_SHOP = 'getAllCategories';
export const GET_PRODUCTS_PER_PAGE_AND_CATEGORY = 'getItemsPerPageAndCategory';
export const PRODUCT_NAME = 'searchName'

const api = new WooCommerceRestApi({
    url: "http://magiosbootcamp.ml/",
    consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
    consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
    version: "wc/v3"
  });
  
  export const searchName = () => {
    return{
      type: PRODUCT_NAME,
    }
  };

export const getAllShopItems = () =>{
    return function(dispatch){
        return api.get("products",{per_page: 9, featured: true ,status: "publish",})
        .then((response) => {
          dispatch({
            type: GET_ALL_SHOP_ITEMS,
            payload: response.data,
        })
        })
        
        .catch((error) => {
          console.log(error.response.data);
        });
    }
}

export const getItemsPerPage = (pages,page) =>{
  return function(dispatch){
      //console.log("entre al getItemsPerPage con pages:" + pages + " y page: " + page )
      return api.get("products",{status: "publish",per_page: pages, page: page})
      .then((response) => {
        //console.log(response.data)
        dispatch({
          type: GET_PRODUCTS_PER_PAGE,
          payload: response.data,
      })
      })
      
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}

export const getAllCategories = () =>{
  return function(dispatch){
      return api.get("products/categories",{parent: 0 , hide_empty: true ,order: "asc"})
      .then((response) => {
        dispatch({
          type: GET_CATEGORIES_SHOP,
          payload: response.data,
      })
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    } 
}

export const getItemsPerPageAndCategory = (pages,page,id) =>{
  return function(dispatch){
    console.log(page)
      return api.get("products",{status: "publish",per_page: pages, page: page, category: id})
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: GET_PRODUCTS_PER_PAGE_AND_CATEGORY,
          payload: response.data,
      })
      })
      
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}


