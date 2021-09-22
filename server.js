const express = require('express');
const server = express();
const port = 3000;

server.use('/api', express.json());

//aktivera server.use = tar över server.get
//server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Tjohoo - vår server är igång på port `+ port)
})