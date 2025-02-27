const express = require('express');
const AsignacionProductoController = require('../controllers/asignacionProducto.controller');
const router = express.Router();

//Obtener todas las personas
router.get('/', AsignacionProductoController.getAllAsignacionesActivas);
router.get('/idPersona/:id', AsignacionProductoController.getAllAsignacionesProductoByPersona)
router.post('/', AsignacionProductoController.createAsignacionProducto)



module.exports = router;
