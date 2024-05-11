const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorProduts = require('../s9a2code/controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const { error } = require('console');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use('shop', shopRoutes.routes);


app.use(errorProduts.error);

const port = 3001;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Servidor executado em http://${host}:${port}`);
});
