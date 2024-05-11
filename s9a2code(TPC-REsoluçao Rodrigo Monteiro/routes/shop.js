const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const getProdutos = require('../controllers/produtos')
const router = express.Router();

router.get('/',getProdutos.getProdutos);

router.get('/cart', getProdutos.getcarrinho);

router.get('/order', getProdutos.getencomenda);

exports.routes = router;
exports.products = getProdutos;