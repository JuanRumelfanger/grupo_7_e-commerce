const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/list', productsController.listProducts);

// CREAr UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', productsController.store);

router.get('/:id', productsController.productsDetail);

// EDITAR UN PRODUCTO
router.get('/:id/edit', productsController.edit);
router.put('/:id/edit', productsController.update);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:id', productsController.destroy);

// COMPRAR UN PRODUCTO
router.get('/:id/shop', productsController.shop);

module.exports = router;