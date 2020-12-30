import axios from 'axios'; 
export const SIGN_IN = "signIn";
export const GET_TOKEN = "getToken";
/* export const CREATE_CUSTOMER = "createCustomer"; */

/* export const api = new WooCommerceRestApi({
    url: "http://magiosbootcamp.ml/",
    consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
    consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
    version: "wc/v3",
  }); */


/* export const logIn = payload => {
   return {
        type: SIGN_IN,
        payload
    }
} */


export const getToken = (email, password) => (dispatch, getState) => {
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username: email, password: password})
    .then((response) => {
        if(response.data.success){
            var token = response.data.data.token;
            window.localStorage.setItem("tokenkey", token);
            window.localStorage.setItem("loggedin", true);
            //dispatch(logIn({loggedin: "true"}));
        }
        else {
            window.alert(response.data.message)
        } 
    })
    .catch(response => window.alert(response.data.message));
}

/* export const createCustomer = (customerdata) => (dispatch, getState) => {
    api.post("customers", customerdata)
    .then(response => {console.log(response)})
} */