const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/list', productsController.listProducts);

module.exports = router;
