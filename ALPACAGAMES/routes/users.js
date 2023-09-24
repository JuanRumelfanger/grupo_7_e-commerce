const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const upload = require('../middlewares/registerImage.js');
router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

module.exports = router;
