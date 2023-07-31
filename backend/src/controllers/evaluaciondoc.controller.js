import { pool } from "../basesdedatos/db.js";

export const get_evaluaciondoc = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from evaluciondoc");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar evaluacion administrativa",
    });
  }
};

export const create_evaluaciondoc = async (req, res) => {
  try {
    const { int, codigo, prom1, prom2, promfn, promestl,comentario } = req.body;
    const [rows] = await pool.query(
      "insert into evaluciondoc (int, codigo, prom1, prom2, promfn, promestl,comentario) values (?, ?, ?, ?, ?, ?, ?)",
      [nt, codigo, prom1, prom2, promfn, promestl,comentario]
    );
    res.status(201).json({
      id_evaluaciondoc: rows.insertId,
      int, 
      codigo, 
      prom1, 
      prom2, 
      promfn, 
      promestl,
      comentario
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};