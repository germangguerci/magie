import axios from 'axios';

const usuario = "germangguerci@gmail.com"
const contraseña = "m&!2iKaXn#gnnjVY"

export const GetToken = () => {
    axios.post(`http://magiosbootcamp.ml/wp-json/jwt-auth/v1/token`, {username:usuario, password:contraseña})
      .then((response) => {
        console.log(response);
        return (<p>Succes</p>)
      })
      .catch((error) => {console.log("Create customer error: ", error); return (<p>Error</p>);});
      return null;
  }
  