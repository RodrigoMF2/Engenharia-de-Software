exports.getADDProduto = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

const products = [];
exports.postADDproduto = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProdutos = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
};

exports.getgerirProdutos =(req, res, next) => {
  res.render('gerir-produtos', {
    prods: products,
    pageTitle: 'Gerir-Produtos',
    path: '//admin/products',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

exports.getnew_products=(req, res, next) => {
    res.render('novo-produto', {
        pageTitle: 'Novos Produtos',
        path: '/admin/produtos',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
  });
};

exports.getcarrinho=(req, res, next) => {
  res.render('carrinho', {
      pageTitle: 'Carrinho',
      path: '/shop/cart',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
});
};

exports.getencomenda=(req, res, next) => {
  res.render('encomenda', {
      pageTitle: 'Encomenda',
      path: '/shop/order',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
});
};

