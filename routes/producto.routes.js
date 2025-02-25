const express = require("express");
const ProductoController = require("../controllers/producto.controller");
const router = express.Router();

router.get("/", ProductoController.getAllProductos);
//Buscar by Id
router.get("/id/:id", ProductoController.getProductoById);
//Buscar by numSerie
router.get("/numSerie/:numSerie", ProductoController.getProductoByNumSerie);
//Crear productos
router.post("/", ProductoController.createProducto);
//Actualizar producto
router.put("/:id", ProductoController.updateProducto);
//Eliminar producto:
router.delete("/id/:id", ProductoController.deleteProducto);
module.exports = router;
