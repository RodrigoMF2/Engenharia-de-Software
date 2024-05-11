const Product = require('../models/product');
const Sequelize = require('sequelize');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Novo Produto',
    path: '/admin/add-product',
    editing: false
  });
};

//exports.postAddProduct = (req, res, next) => {
//  const title = req.body.title;
//  const imageUrl = req.body.imageUrl;
//  const price = req.body.price;
//  const description = req.body.description;
//  const product = new Product(null, title, imageUrl, description, price);
//  product.save();
//  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
//  res.set('Pragma', 'no-cache');
//  res.set('Expires', 0);
//  res.redirect('/');
//};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
//criação do metodo create com o modelo Product
  Product.create(
    {
      title:title,
      imageurl:imageUrl,
      price: price,
      description:description
    }
).then(product =>{
  console.log('Product created:' ,product);
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', 0);
  res.redirect('/');
})
.catch((error)=>{
  console.log(error.message);
  process.exit(1);
})
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Modificar Produto',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Gerir Produtos',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};