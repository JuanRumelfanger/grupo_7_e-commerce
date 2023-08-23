const express = require('express');
const path = require ('path');
const mainController = require('../controllers/mainController');
const router = express.Router();


router.get('/' ,mainController.home);

router.get('/register' ,mainController.register);

router.get('/login' ,mainController.login);

router.get('/shop' ,mainController.shop);

router.get('/productDetail/:id' ,mainController.productDetail);
  
router.get('/test', mainController.test);

module.exports = router;