const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/products.json'));
const products = JSON.parse(dataJson);

// ACTUALIZAR BASE DE DATOS
function updateJSON() {
  const productsJSON = JSON.stringify(products, null, 4);
  fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
}

const productsController = {
  listProducts: (req, res) => {
    res.render('productsList', { products: products });
  },
  productsDetail: (req, res) => {
    let productFound = products.find((x) => x.id == req.params.id);
    res.render('productDetail', { product: productFound });
  },
  create: (req, res) => {
    res.render('crearProducto');
  },
  store: (req, res) => {
    /*
    newProduct = {
      id: products.length + 1,
      name: req.body.name,
      description: req.body.description,
      platforms: req.body.plataforms,
      genre: req.body.genre,
      releaseDate: req.body.releaseDate,
      price: +req.body.price,
      images: req.body.images,
      systemReq: req.body.systemReq,
      downloadSize: req.body.downloadSize,
    };
    products.push(newProduct);
    updateJSON();
    res.redirect('/products/' + newProduct.id);
    */
    const imageFilename = req.file ? req.file.filename : null;
    const selectedPlatforms = Array.isArray(req.body.platforms)
      ? req.body.platforms
      : [req.body.platforms];
    const lastProductId = products[products.length - 1].id;

    const newProduct = {
      id: lastProductId + 1,
      name: req.body.name,
      description: req.body.description,
      platforms: selectedPlatforms,
      genre: req.body.genre,
      releaseDate: req.body.releaseDate,
      price: parseFloat(req.body.price),
      images: imageFilename,
      systemReq: { os: req.body.os, storage: req.body.storage },
      downloadSize: Number(req.body.downloadSize),
    };
    //newProduct.id = lastProductId + 1;

    //newProduct.platforms = selectedPlatforms;
    //newProduct.images = imageFilename;
    products.push(newProduct);
    updateJSON();
    res.redirect('/products/');
  },
  edit: (req, res) => {
    let productFound = products.find((x) => x.id == req.params.id);
    res.render('editarProducto', { product: productFound });
  },
  update: (req, res) => {
    let productFound = products.find((x) => x.id == req.params.id);
    productFound.name = req.body['name-product'];
    productFound.description = req.body.address;
    productFound.platforms = req.body.plataforms;
    productFound.genre = req.body.genre;
    productFound.releaseDate = req.body.releaseDate;
    productFound.price = +req.body.price;
    productFound.images = req.body.images;
    productFound.systemReq = req.body.systemReq;
    productFound.downloadSize = req.body.downloadSize;
    updateJSON();
    res.redirect('/products/' + req.params.id);
  },
  destroy: (req, res) => {
    let index = products.findIndex((x) => x.id == req.params.id);
    products.splice(index, 1);
    updateJSON();
    res.redirect('/products');
  },
  shop: (req, res) => {
    let productFound = products.find((x) => x.id == req.params.id);
    res.render('shop', { product: productFound });
  },
};

module.exports = productsController;
