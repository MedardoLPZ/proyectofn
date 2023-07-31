

import { Router } from "express";
import { get_users, create_users, update_users } from "../controllers/users.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/users", get_users);

//esta ruta es para crear usuarios
router.post("/users", create_users);

//esta ruta es para actualizar el usuario
//router.patch("/users/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;