import { Router } from "express";
import { get_evaluacionadm, create_evaluacionadm } from "../controllers/evaluacionadm.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/evaluacionadm", get_evaluacionadm);

//esta ruta es para crear usuarios
router.post("/evaluacionadm", create_evaluacionadm);

//esta ruta es para actualizar el usuario
//router.patch("/user/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;