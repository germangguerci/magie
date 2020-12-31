const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mercadopago = require('mercadopago');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mercadopago.configure({
    access_token: 'TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111'
});

app.post('/checkout', (req, res) => {
  console.log("ENTRE A CHECKOUT");
  console.log(req);
  res.send(console.log("REQUEST POST 3001: ", req.body.items))
  // console.log("respuesta post 3001: ", res);
  // let items = req.body.productsInCart.forEach(product => {
  //   return {
  //       title: product.name,
  //       unit_price: parseInt(product.price),
  //       quantity: product.quantityInCart
  //   }
  // })
  let preference = {items: req.body.items};
    

  mercadopago.preferences.create(preference)
    .then(function(response){
      console.log("Entre al preference de la api");
      res.redirect(response.body.init_point);
    })
    .catch(function(error){
      console.log(error);
    });
});

app.listen(3001, () => {
    console.log("Server on port 3001");
});