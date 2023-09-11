const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/list', productsController.listProducts);

// CREACION DE PRODUCTOS
router.get('/create', productsController.create);
router.post('/create', productsController.store);

router.get('/:id', productsController.productsDetail);


module.exports = router;