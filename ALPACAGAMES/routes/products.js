const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/list', productsController.listProducts);

// CREACION DE PRODUCTOS
router.get('/create', productsController.create);
router.post('/create', productsController.store);

router.get('/:id', productsController.productsDetail);

// EDICION DE PRODUCTOS
router.get('/:id/edit', productsController.edit);
router.put('/:id/edit', productsController.update);

module.exports = router;