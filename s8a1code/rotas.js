const express = require('express');

const router = express.Router();

const path = require('path');
const caminhoRaiz = require('./util/caminho');

router.get('/',(req,res,next) => {
  res.send('<h1>Sistema GA</h1>');
})

router.get('/disciplina', (req,res,next) => {
  res.send('<h2>Lista disciplinas</h2>\
            <ul><li>Engenharia de Software</li>\
            <li>Sistemas Distribuidos</li>\
            </ul>');
});

router.get('/novad',(req,res,next) => {
  res.sendFile(path.join(caminhoRaiz,'views','nova-disciplina.html'))
})

router.post('/novadisciplina',(req,res,next) => {
  console.log(req.body);
})

module.exports = router;