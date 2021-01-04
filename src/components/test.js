import axios from 'axios';

const getMenu = () => {
    axios.get('http://magiosbootcamp.ml/wp-json/wp-api-menus/v2/menus', {headers:{Authorization: "Bearer " + window.localStorage.getItem("tokenkey")}})
    .then(response => console.log("Succes: ", response))
    .catch(error => console.log("Error: ", error));
    return null;
};

export default getMenu;