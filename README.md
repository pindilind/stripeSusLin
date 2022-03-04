


<h1>STRIPE SUSLIN 💸</h1>

Grupp 4: Linda Gustafsson, Susan Isaksson | betygsnivå: G | GitHub link: https://github.com/SusanIsaksson/stripeSusLin.git <br>

Inlämningsuppgift - betaltjänst i stripe <br><br>

#### Krav för godkänt: 

    1. Ni skall bygga en simpel webshop med valfri stack. 
       Ansvarig: Linda och Susan - KLAR

    2. Er webbshop skall ha som minst två sidor, en där produkter listas (startsida) samt en där en kundvagn finns.
       Ansvarig: Linda och Susan - KLAR

    3. Det skall gå att genomföra ett köp och få en bekräftelse av att köpet genomförts.
       Ansvarig: Linda och Susan - KLAR

    4. Efter verifikation ifrån Stripe att ett köp genomförts skall ordern sparas i en JSON-fil på servern.
       Ansvarig: Linda och Susan - KLAR

    5. Vid verifikation att köpet är gjort skall det ej vara möjligt att en dublett av ordern sparas. i JSON-filen 
       (kolla om ordern redan existerar i JSON-filen). 
       Ansvarig: Linda och Susan - KLAR

    6. Git & GitHub har använts. - KLAR
    7. Projektmappen innehåller en README.md fil (läs ovan för mer info). - KLART

    8. Uppgiften lämnas in i tid! - ÄR MÅLET

### Summary of the application

#### A simple webshop with payment in Stripe using Node.js, Express and stripe

This application is a webshop with wedding dresses to buy and payment with stripe.
Enjoy our beautiful side with beautiful images for a pleasent experience for a long happy life with love.
## Installation 

#### This is a Node.js application. 
#### Before installing, download and install Node.js. 
#### You may need to create a package.json first, use command:
    npm init 
#### To install express, socket.io and nodemon, use npm install comand: 
    npm install express 
    npm install stripe
    npm install dotenv
    npm install –g nodemon 

#### Create a server file
    server.js

and enter following code:

    require('dotenv).config('.env');

    const express = require('express');
    const server = express();
    const stripe = require('stripe')(secretKey)
    const fs = require('fs')

    const port = 3000

    server.use(./api', express.json())
    server.use(express.static('public))

    app.get('/', (req, res) => {
        res.send('<h1>Hello world</h1>)
    })

    http.listen(port, () => console.log('The server is working and listen to port ' + port))

Start the app in the terminal with 
    nodemon server.js 
    npm start
Now the server should be up and going in port 3000 in you localhost.

### Stripe
Stripe require an account on stripe.com to access the needed public.key and secret.key. Important to place the secret.key in a .env-file and also create a .gitignore-file to place the .env.file and /nodemodules.
   

## Quick start 

    Check if node.js is installed:  node and the version vill show in the terminal 

    Create and open a application/repostitory to use 

    In the terminal: npm init

    Install dependencies: npm install express, npm install stripe, npm install dotenv, npm install -g nodemon

    Start the server: nodemon server.js, npm start 

    Set the port to: 3000 (localhost:3000) 

#### version 01.0.0/2021-10-01

<strong><em><h4 align="center">Go to my [GitHub profile](https://github.com/pindilind) to see more of my projects ♥</h4></em></strong>
