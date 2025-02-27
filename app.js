const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const personasRoutes = require("./routes/persona.routes");
const productoRoutes = require("./routes/producto.routes")
const asignacionProductoRoutes = require("./routes/asignacionProducto.routes")

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api/personas", personasRoutes);
app.use("/api/productos", productoRoutes)
app.use("/api/asignacionProducto", asignacionProductoRoutes )

// Conexion a la base de datos

mongoose.connect(
  "mongodb+srv://20233tn137:Sca0K7DkIhgwpNs1@chriscloud.wkdec.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=ChrisCloud"
).then(() => {
  console.log("Conectado a la base de datos");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en  https://localhost:${(PORT)}`);
  });
}).catch((error) => {
  console.log("Error al conectar a la base de datos", error);
});
