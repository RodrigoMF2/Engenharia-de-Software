const express = require('exrpress');
const bodyparser = require('body-parser');

const router = express.Router();

router.get('/',(req,res,next) =>{
    res.send('<h1>Bem Vindo</h1>');
});

router.get('/disciplina', (req,res,next)=>{
    res.send('<h1>Lista de Disciplinas</h1>\
                <ul>\
                    <li>Engenharia Informatica</li>\
                    <li>Sistemas Distribuidos</li>\
                </ul> ');
});

router.get('/novad',(req,res,next) =>{

});

module.exports = router;