const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const upload = require('../middlewares/registerImage.js');

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', usersController.register);
router.post(
  '/register',
  upload.single('avatar'),
  usersController.processRegister,
);

module.exports = router;
