const express = require('express');
const http = require('http');

const app = express();
const servidor = http.createServer(app);

const port = 3002;
const hostname = '127.0.0.1';

// Middleware para logging
app.use((req, res, next) => {
    console.log(`Recebida requisição ${req.method} para ${req.url}`);
    next();
});

// Rotas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/sobre', (req, res) => {
    res.send('Página sobre nós');
});

app.get('/a/', (req, res) => {
    res.send('Página de contato');
});

app.get('/exemplo/b', (req,res,next)=>{
    console.log('a resposta sera enviada para a proxima função...');
    next();
},(req, res) =>{
    res.download('B diz olá!');
});

app.route('/livro').get((req,res) =>{
    res.send('retorna um livro aleatorio');
}).post((req,res) => {
    res.send('Adiciona um livro');
}).put((req, res) =>{
    res.send('Atualize o livro');
})

// Iniciar servidor
servidor.listen(port, hostname, () => {
    console.log(`Servidor a rodar em http://${hostname}:${port}`);
});
