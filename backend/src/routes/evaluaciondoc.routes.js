import { Router } from "express";
import { get_evaluaciondoc, create_evaluaciondoc} from "../controllers/evaluaciondoc.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/evaluaciondoc", get_evaluaciondoc);

//esta ruta es para crear usuarios
router.post("/evaluaciondoc", create_evaluaciondoc);

//esta ruta es para actualizar el usuario
//router.patch("/users/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;