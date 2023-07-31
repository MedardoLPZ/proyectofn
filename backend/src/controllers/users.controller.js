import { pool } from "../basesdedatos/db.js";

export const get_users = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from usuarios");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar usuario",
    });
  }
};

export const create_users = async (req, res) => {
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
export const update_users = async (req, res) => {
  try {
    const { nombre, correo, contraseña, roll } = req.body;
    const { id } = req.params;

    const [rows] = await pool.query(
      "UPDATE usuarios SET nombre = ?, correo = ?, contraseña = ?, roll = ? WHERE id = ?' ",
      [nombre, correo, contraseña, roll,id]
    );
    res.status(201).json({
      nombre,
      correo,
      contraseña,
      roll,
      id
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};
