import {api} from '../../redux/CartReducer/actions'

const TESTINGDATA = {
  email: "jaunsarascamila@gmail.com",
  first_name: "Camila",
  last_name: "Jaunsaras",
  username: "camilajaunsaras",
  billing: {
    first_name: "camila",
    last_name: "jaunsaras",
    company: "",
    address_1: "969 Markett",
    address_2: "",
    city: "Mar de ajo",
    state: "BSAS",
    postcode: "94103",
    country: "US",
    email: "jaunsarascamila@gmail.com",
    phone: "(555) 535-5555"
  },
  shipping: {
    first_name: "Camila",
    last_name: "Jaunsaras",
    company: "",
    address_1: "969 Markeet",
    address_2: "",
    city: "San Frrancisco",
    state: "CA",
    postcode: "94103",
    country: "US"
  }
};
  
  export const CreateCustomer = () => {
    console.log("Bearer "+ window.localStorage.getItem("tokenkey"))
    api.post("customers", TESTINGDATA, {Authorization: ("Bearer "+ window.localStorage.getItem("tokenkey"))})
      .then((response) => {
        console.log(response);
        return (<p>Succes</p>)
      })
      .catch((error) => {console.log("Create customer error: ", error); return (<p>Error</p>);});
      return null;
      
  }
  

