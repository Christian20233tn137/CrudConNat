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

  async createAsignacionProductos(personaId, productosId) {
    const persona = await PersonaRepository.getPersonaById(personaId);

    if (!persona) {
      throw new Error("La persona no existe");
    }

    let asignacioes = [];
    for (let index = 0; index < productosId.length; index++) {
      const productoId = productosId[index];

      try {
        const asignacionCreada =
          await AsignacionProductoRepository.createAsignacionProducto(
            personaId,
            productoId
          );

        asignacioes.push(asignacionCreada);
      } catch (error) {
        const asignacionError = { producto: productoId, error: error.message };
        asignacioes.push(asignacionError);
      }
    }
  }

  async getAllAsignacionesProductoByPersona(personaId) {
    try {
      const asignaciones =
        await AsignacionProductoRepository.getAllAsignacionesProductoByPersona(
          personaId
        );
      return asignaciones;
    } catch (error) {
      throw new Error("Error al obtener las asignaciones");
    }
  }

  async inactiveStatusAsignacionProducto(idAsignacion) {
    try {
      const asignacionInactivada =
        await AsignacionProductoRepository.inactiveStatusAsignacionProducto(
          idAsignacion
        );

      if (!asignacionInactivada) {
        throw new Error("Asignación no encontrada");
      }

      return asignacionInactivada;
    } catch (error) {
      throw new Error("Error al obtener la asignación");
    }
  }
}

module.exports = new asignacionProductoService();
