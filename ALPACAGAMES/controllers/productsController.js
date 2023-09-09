const fs = require('fs');
const path = require('path');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/products.json'));
const products = JSON.parse(dataJson);

const productsController = {
  listProducts: (req, res) => {
    res.render('productsList', { products: products });
  },

  productDetail: (req, res) => {
    const idProduct = req.params.id;
    const product = products.filter(function(elem){
      return elem.id == idProduct;
    })
    res.render('productDetail', { product:product });
  }
};  

module.exports = productsController;
