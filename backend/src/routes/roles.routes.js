import { Router } from "express";
import { get_roles, create_roles } from "../controllers/roles.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/roles", get_roles);

//esta ruta es para crear usuarios
router.post("/roles", create_roles);

//esta ruta es para actualizar el usuario
//router.patch("/users/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;