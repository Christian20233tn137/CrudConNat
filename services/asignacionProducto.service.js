const AsignacionProductoRepository = require("../repositories/asignacionProducto.repository");
const PersonaRepository = require("../repositories/persona.repository");
const ProductoRepository = require("../repositories/producto.repository");

class asignacionProductoService {
  async getAllAsignacionesActivas() {
    return await AsignacionProductoRepository.getAllAsignacionesActivas();
  }

  async createAsignacionProducto(personaId, productoId) {
    //Validar que ambos existan
    const persona = await PersonaRepository.getPersonaById(personaId);
    const producto = await ProductoRepository.getProductoById(productoId);

    if (!persona) {
      throw new Error("La persona no existe");
    }
    if (!producto) {
      throw new Error("El producto no existe");
    }

    const asignacionCreada =
      await AsignacionProductoRepository.createAsignacionProducto(
        personaId,
        productoId
      );
    return asignacionCreada;
  }
}

module.exports = new asignacionProductoService();
