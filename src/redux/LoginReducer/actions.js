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
        if(response.data.success){
            var token = response.data.data.token;
            window.localStorage.setItem("tokenkey", token);
            dispatch(logIn({loggedin: true}));
        }
        else {
            window.alert(response.data.message)
        } 
    })
    .catch(response => window.alert(response.data.message));
}