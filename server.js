//Co-authored-by: Susan Isaksson <SusanIsaksson@users.noreply.github.com> || Co-authored-by: Linda G <Pindilind@users.noreply.github.com>
require('dotenv').config('.env');

const secretKey = process.env.STRIPE_SECRET_KEY;
const express = require('express');
const server = express();
const stripe = require('stripe')(secretKey)

const port = 3000;

server.use('/api', express.json());


//aktivera server.use = tar över server.get
server.use(express.static('public'));

/* server.get('/', (req, res) => {
    res.send('Hello World!')
}) */

server.post('/api/session/new', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body.line_items,
        mode: "payment",
        success_url: "http://localhost:3000/checkout_success.html",
        cancel_url: "http://localhost:3000/checkout_failed.html"
    });
    console.log(session)
    res.status(200).json({ id: session.id })
})

server.listen(port, () => {
    console.log(`Tjohoo - vår server är igång på port ` + port)
})

//Co-authored-by: Susan Isaksson <SusanIsaksson@users.noreply.github.com> || Co-authored-by: Linda G <Pindilind@users.noreply.github.com>