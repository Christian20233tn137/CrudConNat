const express = require('express');
const AsignacionProductoController = require('../controllers/asignacionProducto.controller');
const router = express.Router();

//Obtener todas las personas
router.get('/', AsignacionProductoController.getAllAsignacionesActivas);
router.get('/idPersona/:id', AsignacionProductoController.getAllAsignacionesProductoByPersona)
router.put('/inactive/:id', AsignacionProductoController.inactiveStatusAsignacionProducto);
router.post('/', AsignacionProductoController.createAsignacionProducto)
router.post('/asignacionProductos', AsignacionProductoController.createAsignacionProductos)



module.exports = router;
