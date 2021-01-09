import axios from 'axios'; 
export const SIGN_IN = "signIn";
export const GET_TOKEN = "getToken";

export const getToken = (email, password) => (dispatch, getState) => {
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username: email, password: password})
    .then((response) => {
        if(response.data.success){
            var token = response.data.data.token;
            window.localStorage.setItem("tokenkey", token);
            window.localStorage.setItem("loggedin", true);
            window.localStorage.setItem("userId", response.data.data.id);
            return response.data.succes
        }
        else {
            console.log("Error login", response)
            window.alert(response.data.message)
            return response.data.success
        } 
    })
}
