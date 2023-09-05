const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/list', productsController.listProducts);
router.get('/:id', productsController.productsDetail)

module.exports = router;
