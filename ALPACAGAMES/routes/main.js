const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

router.get('/' ,mainController.home);

router.get('/register' ,mainController.register);

router.get('/login' ,mainController.login);

router.get('/shop' ,mainController.shop);

router.get('/detail' ,mainController.productDetail);

router.get('/crear', mainController.crearProducto);
  
router.get('/editar', mainController.editarProducto);
  
module.exports = router;