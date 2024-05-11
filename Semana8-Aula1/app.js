const express = require('express');

const servidor = express();

const rotas = require('./rotas');

servidor.use(rotas);

const port = 3002;

const host='127.0.0.1';




servidor.listen(port, host, ()=>{
    console.log(`Servidor aberto no ${hostname} e ${port}`)
});