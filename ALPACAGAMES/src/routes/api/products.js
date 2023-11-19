const express = require('express');
const router = express.Router();

const videogamesAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de usuarios
router.get('/', videogamesAPIController.list);
//Detalle de usuario
router.get('/:id', videogamesAPIController.detail);

//Agregar un nuevo usuario
router.post('/create', videogamesAPIController.create);

//Modificar un usuario
router.put('/update/:id', videogamesAPIController.update);

//Eliminar un usuario
router.delete('/delete/:id', videogamesAPIController.destroy)

module.exports = router;