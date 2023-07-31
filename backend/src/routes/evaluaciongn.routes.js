import { Router } from "express";
import { get_evaluaciongn, create_evaluacionfn } from "../controllers/evaluaciongn.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/evaluaciongn", get_evaluaciongn);

//esta ruta es para crear usuarios
router.post("/evaluaciongn", create_evaluacionfn);

//esta ruta es para actualizar el usuario
//router.patch("/users/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;