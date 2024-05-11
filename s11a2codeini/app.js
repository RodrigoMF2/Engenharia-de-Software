const path = require('path');

//objeto sequilize que permite ligar a base de dados
const conexaoDB = require('./util/database')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const user = require('./models/User');
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
.then(() => {
    console.log('Conexão com o banco de dados estabelecida!');
    // Sincronize o modelo User com o banco de dados
    user.sync()
    .then(() => {
        console.log('Modelo User sincronizado com sucesso!');
        app.listen(8000, () => {
            console.log('Servidor rodando na porta 8000');
        });
    })
    .catch(error => {
        console.error('Erro ao sincronizar o modelo User:', error);
    });
})
.catch(error => {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
});


