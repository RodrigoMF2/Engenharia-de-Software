const path = require('path');

//objeto sequilize que permite ligar a base de dados
const conexaoDB = require('./util/database')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


conexaoDB.authenticate()
.then( () => {
    console.log('Conexao a DB ok!');
    conexaoDB.sync( {force: true} )
    .then( () => {
        console.log('Modelos sincronizados com sucesso!');
        app.listen(8000);
    })
    .catch( erro =>{
        console.log(erro.message);
    })
    
})
.catch( (erro) => {
    console.log(erro.message);
    process.exit(1);
});


