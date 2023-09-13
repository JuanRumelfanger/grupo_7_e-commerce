const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

router.get('/', productsController.listProducts);

// CREAR UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', upload.single('images'), productsController.store);

//DETALLE DE UN PRODUCTO
router.get('/:id', productsController.productsDetail);

// EDITAR UN PRODUCTO
router.get('/:id/edit', productsController.edit);
router.put('/:id/edit', productsController.update);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:id', productsController.destroy);

// COMPRAR UN PRODUCTO
router.get('/:id/shop', productsController.shop);

module.exports = router;
