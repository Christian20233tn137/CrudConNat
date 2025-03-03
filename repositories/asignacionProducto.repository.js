const AsignacionProducto = require("../models/asignacionProducto");

class AsignacionProductoRepository {
  async getAllAsignacionesActivas() {
    return await AsignacionProducto.find({ estado: "Activo" })
      .populate("persona")
      .populate("producto");
  }

  async getAllAsignacionesProductoByPersona(personaId) {
    return await AsignacionProducto.find({ persona: personaId }).populate(
      "producto"
    );
  }

 async getAsignacionId(){
  return await A
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
  
  async inactiveStatusAsignacionProducto(idAsignacion) {
    return await AsignacionProducto.findByIdAndUpdate(idAsignacion, { 
      estado: "Inactivo",
    });
  }

  async getAsignacionProductoById() {}
}

module.exports = new AsignacionProductoRepository();
