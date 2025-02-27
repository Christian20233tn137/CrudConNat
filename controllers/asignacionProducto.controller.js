const AsignacionProductoService = require("../services/asignacionProducto.service");

class AsignacionProductoController {
  async getAllAsignacionesActivas(req, res) {
    try {
      const asignacionesActivas =
        await AsignacionProductoService.getAllAsignacionesActivas();
      res.json(asignacionesActivas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createAsignacionProducto(req, res) {
    try {
      //Validar que el id de la persona y el id del producto vengan en el body
      const personaId = req.body.persona;
      if (
        !personaId ||
        personaId == "" ||
        personaId == null ||
        personaId == undefined
      ) {
        throw new Error("El id de la persona es requerido");
      }
      const productoId = req.body.producto;
      if (
        !productoId ||
        productoId == "" ||
        productoId == null ||
        productoId == undefined
      ) {
        throw new Error("El id del producto es requerido");
      }
      const asignacionCreada =
        await AsignacionProductoService.createAsignacionProducto(
          personaId,
          productoId
        );
      res.json(asignacionCreada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllAsignacionesProductoByPersona() {}
}

module.exports = new AsignacionProductoController();
