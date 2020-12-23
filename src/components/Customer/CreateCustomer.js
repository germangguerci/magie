import {api} from '../../redux/CartReducer/actions'

const TESTINGDATA = {
  email: "john.doe@example.com",
  first_name: "John",
  last_name: "Doe",
  username: "john.doe",
  billing: {
    first_name: "John",
    last_name: "Doe",
    company: "",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
    email: "john.doe@example.com",
    phone: "(555) 555-5555"
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    company: "",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US"
  }
};
  
  export const CreateCustomer = () => {
    api.post("customers", TESTINGDATA)
      .then((response) => {
        console.log(response);
        return (<p>Succes</p>)
      })
      .catch((error) => {console.log("Create customer error: ", error); return (<p>Error</p>);});
      return null;
      
  }
  

