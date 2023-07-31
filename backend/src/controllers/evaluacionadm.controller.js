import { pool } from "../basesdedatos/db.js";

export const get_evaluacionadm = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from evalucionadm");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar evaluacion administrativa",
    });
  }
};

export const create_evaluacionadm = async (req, res) => {
  try {
    const { int, codigo, promedio1, promedio2, promedio3, promediofn } = req.body;
    const [rows] = await pool.query(
      "insert into evalucionadm (int, codigo, promedio1, promedio2, promedio3, promediofn) values (?, ?, ?, ?, ?, ?)",
      [int, codigo, promedio1, promedio2, promedio3, promediofn]
    );
    res.status(201).json({
      id_evaluacionadm: rows.insertId,
      int, 
      codigo, 
      promedio1, 
      promedio2, 
      promedio3, 
      promediofn
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};