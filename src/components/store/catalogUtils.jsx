import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";



export const api = new WooCommerceRestApi({
    url: "http://magiosbootcamp.ml/",
    consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
    consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
    version: "wc/v3"
  });
  

export const getProducts = api.get("products",{per_page: 100 ,status: "publish"});

export const getCategorys = api.get("products/categories",{per_page: 100, parent: 0 ,hide_empty: true});

export const getItemByCat = (id) => api.get("products",{status: "publish",per_page: 100, category: id})

export const getItemByName = (name) => api.get("products",{status: "publish",per_page: 100, search: name})

export const getCategoryChilds = (id) => api.get("products/categories",{per_page: 100, parent: id,hide_empty: true});