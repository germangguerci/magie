import {api} from '../../redux/CartReducer/actions'

const TESTINGDATA = {
  email: "dipiso1688@kakekbet.com",
  first_name: "dip",
  last_name: "iso",
  username: "dipiso",
  billing: {
    first_name: "dip",
    last_name: "iso",
    company: "",
    address_1: "967 Markett",
    address_2: "",
    city: "Mar de ajo",
    state: "BSAS",
    postcode: "7109",
    country: "AR",
    email: "dipiso1688@kakekbet.com",
    phone: "(555) 534-5555"
  },
  shipping: {
    first_name: "Dip",
    last_name: "Iso",
    company: "",
    address_1: "967 Markeet",
    address_2: "",
    city: "Mar De Ajo",
    state: "BSAS",
    postcode: "7109",
    country: "AR"
  }
};
  
  export const CreateCustomer = () => {
   // console.log("Bearer "+ window.localStorage.getItem("tokenkey"))
   // api.post("customers", TESTINGDATA, {Authorization: ("Bearer "+ window.localStorage.getItem("tokenkey"))})
   api.post("customers", TESTINGDATA)
      .then((response) => {
        console.log(response);
        return (<p>Succes</p>)
      })
      .catch((error) => {console.log(error.response.data.code, error.response.data.message); return (<p>Error</p>);});
      return null;
      
  }
  

