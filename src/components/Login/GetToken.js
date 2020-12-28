import axios from 'axios';
import { useDispatch } from 'react-redux';
import {logIn} from '../../redux/LoginReducer/actions'


  export const GetToken = (usuario, contraseña) => {
    const dispatch = useDispatch()
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username:usuario, password:contraseña})
      .then((response) => {
        var token = response.data.data.token;
        window.localStorage.setItem("tokenkey", token);
        return (response);
      })
      .then ((response) => {
        if(response.data.succes){
          window.alert(response.data.message)
         dispatch(logIn({email: usuario, password: contraseña}))
        }
        else {
          window.alert(response.data.message)
        }
      })
      //This catch will never be used in theory, but we leave it here just in case we need it. 
      .catch((error) => {console.log("Create customer error: ", error); return null;});
      return null;
  }
