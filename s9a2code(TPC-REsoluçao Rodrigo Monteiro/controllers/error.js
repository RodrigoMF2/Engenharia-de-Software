exports.error = (req, res, next) => {
    res
      .status(404)
      .render('404', { 
        pageTitle: 'Página não encontrada', 
        path: '/' 
      });
};