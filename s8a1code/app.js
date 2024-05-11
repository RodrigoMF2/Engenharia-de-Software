const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const rotas = require('./rotas');
const servidor = express();

servidor.use(bodyParser.urlencoded());
servidor.use(express.static('public'));

servidor.use(rotas);




const port = 3003;
const host = '127.0.0.1';
servidor.listen(port,host,() => {
  console.log("Servidor a rodar");
});