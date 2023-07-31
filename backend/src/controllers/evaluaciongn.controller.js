import { pool } from "../basesdedatos/db.js";

export const get_evaluaciongn = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from evaluaciongn");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar evaluacion final",
    });
  }
};

export const create_evaluacionfn = async (req, res) => {
  try {
    const { id, id_evaluacion, id_evaluaciondc, genfn } = req.body;
    const [rows] = await pool.query(
      "insert into evaluaciongn (id, id_evaluacion, id_evaluaciondc, genfn) values (?, ?, ?, ?)",
      [nombre, correo, contraseña, roll]
    );
    res.status(201).json({
      id_evaluaciongn: rows.insertId,
      id, 
      id_evaluacion, 
      id_evaluaciondc, 
      genfn
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear evaluacion final",
    });
  }
};