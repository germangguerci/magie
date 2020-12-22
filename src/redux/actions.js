import WooCommerce from 'woocommerce-api';
import axios from 'axios';

 
var WooCommerce = new WooCommerceAPI({
  url: 'http://example.com',
  consumerKey: 'ck_9be9e390810677fc9eb7ae2c51c2533a9e58669e',
  consumerSecret: 'cs_cfdc41e2cff98ba78c5820d13666b2e51cdb9a9c',
  version: 'v3'
});

const getProductsInCart = () => {
    axios.get("http://magiosbootcamp.ml/wp-json/wc/v3/products")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

