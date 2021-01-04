import {api} from '../redux/CartReducer/actions'

const TESTINGDATA = {
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    username: "john.doe",
    password: "8V91PhV6SMGBx(ht6hB231!N"
  }
  
  export const CreateCustomer = () => {
    api.post("customers", TESTINGDATA)
      .then((response) => {
        console.log(response);
        return (<p>Succes</p>)
      })
      .catch((error) => {console.log("Create customer error: ", error); return (<p>Error</p>);});
      return null;
      
  }
  

