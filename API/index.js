const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/**Heroku deployment */
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

//-------------------//
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
  const items = JSON.parse(req.body.items)

  let preference = {
    items: items,
    back_urls: {
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/",
      pending: "http://localhost:3000/"
    },
    auto_return: "approved"
  };
    

  mercadopago.preferences.create(preference)
    .then(function(response){
      res.redirect(response.body.init_point);
    })
    .catch(function(error){
      console.log(error);
    });
});

