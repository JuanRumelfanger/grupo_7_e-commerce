const fs = require('fs');
const path = require('path');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/products.json'));
const products = JSON.parse(dataJson);

const productsController = {
  listProducts: (req, res) => {
    res.render('productsList', { products: products });
  },
  productsDetail: (req, res) => {
    const idProduct = req.params.id;
    const productFound = products.filter(product => product.id == idProduct);
    res.render('productDetail',{product : productFound})
  },
  create: (req, res) => {
    res.render('crearProducto');
  },
  store: (req, res) => {
    res.send('Aqui se envia los datos')
  }
};

module.exports = productsController;
