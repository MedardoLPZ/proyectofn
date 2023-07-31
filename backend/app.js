import  express  from "express";

import usersRoutes from "./src/routes/users.routes.js";
import administradorRoutes from "./src/routes/administrador.routes.js";
import ofertasRoutes from "./src/routes/ofertas.routes.js";
import evaluacionadmRoutes from "./src/routes/evaluacionadm.routes.js";
import evaluaciondocRoutes from "./src/routes/evaluaciondoc.routes.js";
import evaluaciongnRoutes from "./src/routes/evaluaciongn.routes.js";
import rolesRoutes from "./src/routes/roles.routes.js";


const app = express();
app.use(express.json());

app.use("/v1", usersRoutes)
app.use("/v1", administradorRoutes)
app.use("/v1", ofertasRoutes)
app.use("/v1", evaluacionadmRoutes)
app.use("/v1", evaluaciondocRoutes)
app.use("/v1", evaluaciongnRoutes)
app.use("/v1", rolesRoutes)


app.use((req, res, next) => {
    res.status(404).json({
        message: "Esta pagina no existe"
    })
});

export default app;