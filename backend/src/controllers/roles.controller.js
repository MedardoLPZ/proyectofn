import { pool } from "../basesdedatos/db.js";

export const get_roles = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from roles");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar roles",
    });
  }
};

export const create_roles = async (req, res) => {
  try {
    const { nombre_rol, descripcion_rol } = req.body;
    const [rows] = await pool.query(
      "insert into roles (nombre_rol, descripcion_rol) values (?, ?)",
      [nombre_rol, descripcion_rol]
    );
    res.status(201).json({
      id_rol: rows.insertId,
      nombre_rol,
      descripcion_rol
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear roles",
    });
  }
};