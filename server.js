require('dotenv').config('.env');

const secretKey = process.env.STRIPE_SECRET_KEY;
const express = require('express');
const server = express();
const stripe = require('stripe')(secretKey)

const port = 3000;

server.use('/api', express.json());


//aktivera server.use = tar över server.get
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.post('/api/session', async (req, res) => {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            { "testProdukt": {
                description: "test",
                price_data: {
                  currency: "sek",
                  product_data: {
                    name: "test test"
                  },
                  unit_amount: 3000,
                }
              }
            }
            ],
            mode: "payment",
            succ_url: "http://localhost:3000/checkout_success.html",
            can_url: "http://localhost:3000/checkout_failed.html"
          }); console.log(stripe)
      })

    server.listen(port, () => {
      console.log(`Tjohoo - vår server är igång på port ` + port)
    })