const fs = require('fs');
const path = require('path');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/products.json'));
const products = JSON.parse(dataJson);

// ACTUALIZAR BASE DE DATOS
const updateJSON = () => fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products));

const productsController = {
  listProducts: (req, res) => {
    res.render('productsList', { products: products });
  },
  productsDetail: (req, res) => {
    let productFound = products.find(x => x.id == req.params.id);
    res.render('productDetail', {product : productFound})
  },
  create: (req, res) => {
    res.render('crearProducto');
  },
  store: (req, res) => {
    newProduct = {
      id: products.length + 1,
      name: req.body.name,
      description: req.body.description,
      platforms: req.body.plataforms,
      genre: req.body.genre,
      releaseDate: req.body.releaseDate,
      price: + req.body.price,
      images: req.body.images,
      systemReq: req.body.systemReq,
      downloadSize: req.body.downloadSize
    }
    products.push(newProduct);
    updateJSON();
    res.redirect('/products/' + newProduct.id);
  },
  edit: (req, res) => {
    let productFound = products.find(x => x.id == req.params.id);
    res.render('editarProducto', {product : productFound});
  },
  update: (req, res) => {
    let productFound = products.find(x => x.id == req.params.id);
    productFound.name = req.body.name;
    productFound.description = req.body.description;
    productFound.platforms = req.body.plataforms;
    productFound.genre = req.body.genre;
    productFound.releaseDate = req.body.releaseDate;
    productFound.price = + req.body.price;
    productFound.images = req.body.images;
    productFound.systemReq = req.body.systemReq;
    productFound.downloadSize = req.body.downloadSize;
    updateJSON();
    res.redirect('/products/' + req.params.id)
  },
	destroy : (req, res) => {
		let index = products.findIndex(x => x.id == req.params.id);
		products.splice(index, 1);
		updateJSON();
		res.redirect('/products/list');
	},
  shop: (req, res) => {
    let productFound = products.find(x => x.id == req.params.id);
    res.render('shop', {product : productFound})
  }
}

module.exports = productsController;
