import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


export const api = new WooCommerceRestApi({
  url: "http://magiosbootcamp.ml/",
  consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
  consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
  version: "wc/v3",
});

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
  

