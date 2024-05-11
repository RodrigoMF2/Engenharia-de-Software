const express = require('express');
const fs = require('fs');
const app = express();
const hostname = '127.0.0.1';
const port = 3002;

//middlware para analizar o corpo da requisição
app.use(express.urlencoded({extended: true}));

// metodo get para enviar o conteudo para a rota principal
app.get('/', function(req, res){
    res.send('<html>'+'<head><title>Digite Messagem</title></head>'+'<body>'+'<form action="/mensagem" method="POST">'
+'<input type="text" name="message">'+'<button type="submit">Enviar</button>'+'</form>'+'</body>'+'</html>');
});


//rota do metodo post
app.post('/mensagem', function(req, res){
    const mensagem = req.body.message;
    console.log('Mensgem recebida:', mensagem);

    //
    fs.writeFile('message.txt', mensagem,(erro) =>{
        if(erro) {
            console.error(erro);
            return res.status(500).send('erro ao salvar  mensagem');

        }
        //rediricionar para a pagina principal
        res.redirect('/');
    });
});


//Criar o servidor
app.listen(port, hostname, () =>{
    console.log(`Servidor aberto no endereço ${hostname} e na porta ${port}`);
});



