import app from "./app.js";
import { PORT } from "./src/basesdedatos/config.js";

app.listen(PORT)
console.log(`servidor corriendo en el puerto: ${PORT}`)

