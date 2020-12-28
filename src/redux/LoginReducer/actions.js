import axios from 'axios'; 
export const SIGN_IN = "signIn";
export const GET_TOKEN = "getToken";


export const logIn = payload => {
   return {
        type: SIGN_IN,
        payload
    }
}


export const getToken = (email, password) => (dispatch, getState) => {
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username: email, password: password})
    .then((response) => {
        console.log("response: ", response);
        var token = response.data.data.token;
        console.log("token: ", token);
        window.localStorage.setItem("tokenkey", token);
        dispatch(logIn({email, password, token}));
    })
}