const AsignacionProducto = require("../models/asignacionProducto");

class AsignacionProductoRepository {
  async getAllAsignacionesActivas() {
    return await AsignacionProducto.find({ estado: "Activo" })
      .populate("Persona")
      .populate("Producto");
  }

  async getAllAsignacionesProductosByPersona(personaId) {
    return await AsignacionProducto.find({ persona: personaId }).populate(
      "Producto"
    );
  }

  async createAsignacionProducto(personaId, productoId) {
    const fechaAsignacion = new Date();
    fechaAsignacion.setHours(0, 0, 0, 0);

    return await AsignacionProducto.create({
      persona: personaId,
      producto: productoId,
      fechaAsignacion: fechaAsignacion,
      estado: "Activo",
    });
  }

  async inactiveStatusAsignacionProducto(idAsignacion) {}

  async getAsignacionProductoById() {}
}

module.exports = new AsignacionProductoRepository();
