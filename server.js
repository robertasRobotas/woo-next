const next = require('next');
const express = require('express');
const secret = require('./secret');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 
const WooCommerce = new WooCommerceRestApi({
  url: 'http://glovescar.com/',
  consumerKey: secret.CUSTOMER_KEY,
  consumerSecret: secret.CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v3'
});

app.prepare().then(()=>{
      const server = express();

      server.get('/getProducts', (req, response)=>{

                WooCommerce.get("products")
                  .then((response) => {
                  console.log('sdsdsd',response.data);
                  })
                  .catch((error) => {
                  console.log(error.response.data);
  });
      });

      server.get('*', (req, res) =>{
            return handle(req, res);
      });

      server.listen(port || process.env.PORT, err =>{
            if(err){
                  console.log('err');
            }
            console.log(`Ready on port ${port}`);
      })
});