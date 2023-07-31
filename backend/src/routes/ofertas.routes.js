import { Router } from "express";
import { get_ofertas, create_ofertas } from "../controllers/ofertas.controller.js";

const router = Router ();

//esta ruta es para trae todos los usuarios
router.get("/ofertas", get_ofertas);

//esta ruta es para crear usuarios
router.post("/ofertas", create_ofertas);

//esta ruta es para actualizar el usuario
//router.patch("/user/:id", update_users) //este es el ejemplo que tenemos que seguir

export default router;