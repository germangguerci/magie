const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mercadopago = require('mercadopago');

  app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mercadopago.configure({
    access_token: 'TEST-1335658861277365-123120-9be6c87d563467b9d0b9c9c2b63b16df-694878249'
});

app.post('/checkout', (req, res) => {
  console.log("ENTRE A CHECKOUT");
  const items = JSON.parse(req.body.items)

  let preference = {
    items: items,
    back_urls: {
      success: "http://localhost:3000/products",
      failure: "http://localhost:3000/products",
      pending: "http://localhost:3000/products"
    },
    auto_return: "approved"
  };
    

  mercadopago.preferences.create(preference)
    .then(function(response){
      console.log("Entre al preference de la api");
      console.log("RESPONSE PREFERENCE: ", response.body);
      res.redirect(response.body.init_point);
    })
    .catch(function(error){
      console.log("entre a error de preference");
      console.log(error);
    });
});

app.listen(3001, () => {
    console.log("Server on port 3001");
});
