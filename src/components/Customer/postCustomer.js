import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const api = new WooCommerceRestApi({
  url: "http://magiosbootcamp.ml/",
  consumerKey: "ck_db87c0bd5a70ec6fc3c5a610f72abed0de57d960",
  consumerSecret: "cs_050edad6ea3532dcd47259866b2d2a799beceb93",
  version: "wc/v3",
});

export const postCustomer = (values) => {
    const CUSTOMERVALUES = {
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        username: values.user_name,
        shipping: {
            first_name: values.first_name,
            last_name: values.last_name,
            company: values.company, 
            address_1: values.adress_1,
            address_2: values.adress_2,
            city: values.city,
            state: values.state,
            postcode: values.postcode,
            country: values.country
        }
    }
    api.post("customers", CUSTOMERVALUES)
    .then(response => {console.log(response)})

}