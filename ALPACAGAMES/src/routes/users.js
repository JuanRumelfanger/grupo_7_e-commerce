const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const uploadFile = require('../middlewares/registerImage.js');
const areYouLogged = require('../middlewares/question');
const areNotYouLogged = require('../middlewares/otherQuestion');
const validations = require('../middlewares/validation');
// Routes for users - Login and Register
router.get('/login', areYouLogged, validations.login, usersController.login);
router.post('/login', usersController.processLogin);
// ------------------------------------------------------ //
router.get('/register', areYouLogged, usersController.register);
router.post(
  '/register',
  uploadFile.single('avatar'),
  validations.register,
  usersController.processRegister,
);

router.get('/logout', areNotYouLogged, usersController.logout);

router.get('/perfil', areNotYouLogged, usersController.perfil);
module.exports = router;
