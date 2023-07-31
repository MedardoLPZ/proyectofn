import { pool } from "../basesdedatos/db.js";

export const get_administradores = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from administrador");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar administrador",
    });
  }
};
export const create_administradores = async (req, res) => {
  try {
    const { nombre, correo, contraseña, roll } = req.body;
    const [rows] = await pool.query(
      "insert into usuarios (nombre, correo, contraseña, roll) values (?, ?, ?, ?)",
      [nombre, correo, contraseña, roll]
    );
    res.status(201).json({
        id: rows.insertId,
        nombre,
        correo,
        contraseña,
        roll
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};