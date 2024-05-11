const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const produtosController = require('../controllers/produtos');

const router = express.Router();
  



// /admin/add-product => GET
router.get('/add-product', produtosController.getADDProduto );

// /admin/add-product => POST
router.post('/add-product', produtosController.postADDproduto);

router.get('/products', produtosController.getgerirProdutos);

router.get('/produtos', produtosController.getnew_products);

exports.routes = router;
exports.products = produtosController;
