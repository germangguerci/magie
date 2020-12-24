import axios from 'axios';

export const GetToken = (usuario="germangguerci@gmail.com", contraseña="m&!2iKaXn#gnnjVY") => {
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username:usuario, password:contraseña})
      .then((response) => {
       var token = response.data.data.token;
       window.localStorage.setItem("tokenkey", token);
        return (<p>Succes</p>)
      })
      .then(() => {console.log("Succes: ", window.localStorage.getItem("tokenkey"))})
      .catch((error) => {console.log("Create customer error: ", error); return (<p>Error</p>);});
      return null;
  }
  