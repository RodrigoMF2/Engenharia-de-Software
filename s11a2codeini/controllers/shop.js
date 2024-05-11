const Product = require('../models/product');
const Cart = require('../models/cart');

//exports.getProducts = (req, res, next) => {
//  Product.fetchAll(products => {
//    res.render('shop/product-list', {
//      prods: products,
//      pageTitle: 'Todos Produtos',
//      path: '/products'
//    });
//  });
//};

//modificação do metodo  fetchAll para o método findAll do sequelize - Product.findAll()
exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(product =>{
    res.render('.shop/product-list',{
      prods:product,
      pageTitle:'Todos produtos',
      path: '/products'
    });
  })
  .catch(error =>{
    console.log(error.message);
    process.exit(1);
  })
};

//exports.getProduct = (req, res, next) => {
//  const prodId = req.params.productId;
//  Product.findById(prodId, product => {
//    res.render('shop/product-detail', {
//      product: product,
//      pageTitle: product.title,
//      path: '/products'
//    });
//  });
//};~
//modificação do .getProduct utilizando 
exports.getProduct = async(req, res,next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then( product =>{
    res.render('shop/product-detail', {
          product: product.toJSON(),
          pageTitle: product.title,
          path: '/products'
  })
})
  .catch(error =>{
    console.log(error.message);
    process.exit(1);
  });
}


//exports.getIndex = (req, res, next) => {
//  Product.fetchAll(products => {
//    res.render('shop/index', {
//      prods: products,
//      pageTitle: 'Shop',
//      path: '/'
//   });
//  });
//};
//modificaçao do.getIndex
exports.getIndex = (req, res,next) =>{
  Product.findAll()
  .then(products =>{
    res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
  })
})
  .catch(error =>{
    console.log(error.message);
    process.exit(1);
  })
};

/*exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Seu carrinho',
        products: cartProducts
      });
    });
  });
};*/
exports.getCart = (req,res,next) =>{
  Cart.getCart()
  .then(cart =>{
    Product.findAll()
    .then(products =>{
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Seu carrinho',
        products: cartProducts
      });
    })
    .catch(error =>{
      console.log(error.message);
      process.exit(1);
    })
    
  })
  .catch(error =>{
    console.log(error.message);
    process.exit(1);
  })
}


/*exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};*/
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return Cart.addProduct(prodId, product.price);
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(error =>{
      console.log(error.message);
      process.exit(1);
    })
};

/*exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};*/
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Cart.deleteProduct(prodId)
    .then(() => {
      res.redirect('/cart');
    })
    .catch(error =>{
      console.log(error.message);
      process.exit(1);
    })
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Encomendas'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
