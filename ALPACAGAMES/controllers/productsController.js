const fs = require('fs');
const path = require('path');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/products.json'));
const products = JSON.parse(dataJson);

const productsController = {
  listProducts: (req, res) => {
    res.render('productsList');
  },
};

module.exports = productsController;
