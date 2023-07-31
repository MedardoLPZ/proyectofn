import { Router } from "express";
import { get_administradores, create_administradores } from "../controllers/administrador.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/administradores", get_administradores);

//esta ruta es para crear usuarios
router.post("/administradores", create_administradores);

//esta ruta es para actualizar el usuario
//router.patch("/user/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;