import axios from 'axios';
//import { useDispatch } from 'react-redux';
import {loginSignIn} from '../../redux/LoginReducer/actions'


export const GetToken = (usuario, contraseña) => {
    //const dispatch = useDispatch();
    return function(dispatch){
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username:usuario, password:contraseña})
      .then((response) => {
        if(response.data.success === "true"){
          console.log("succes")
          var token = response.data.data.token;
          window.localStorage.setItem("tokenkey", token);
          dispatch(loginSignIn({loggedin: true}));
          return null;
        }
        else{
          window.alert(response.data.message)
          dispatch(loginSignIn({loggedin: false}));
          return null
        }
          
      })
      .catch((error) => {
        dispatch(loginSignIn({loggedin: false}));
        window.alert(error); 
        return null
      });
      return null;
    }
  }
  