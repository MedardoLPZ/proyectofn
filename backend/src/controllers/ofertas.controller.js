import { pool } from "../basesdedatos/db.js";

export const get_ofertas = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from oferta_academica");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al cargar las ofertas academicas",
    });
  }
};

export const create_ofertas = async (req, res) => {
  try {
    const { Asignatura, Grupo, Seccion, UV, UVP, Nombres, Cuenta_Catedratico, Estatus, Aula, Inicio, Fin, Dias, Jornada, Capacidad, Cupo, Matriculados, Pre_Matriculados, Acepta_LE, Lista_Espera } = req.body;
    const [rows] = await pool.query(
      "insert into oferta_academica( Asignatura, Grupo, Seccion, UV, UVP, Nombres, Cuenta_Catedratico, Estatus, Aula, Inicio, Fin, Dias, Jornada, Capacidad, Cupo, Matriculados, Pre_Matriculados, Acepta_LE, Lista_Espera) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [Asignatura, Grupo, Seccion, UV, UVP, Nombres, Cuenta_Catedratico, Estatus, Aula, Inicio, Fin, Dias, Jornada, Capacidad, Cupo, Matriculados, Pre_Matriculados, Acepta_LE, Lista_Espera]
    );
    res.status(201).json({
        codigo : rows.insertId,
        Asignatura,
        Grupo,
        Seccion,
        UV,
        UVP,
        Nombres,
        Cuenta_Catedratico,
        Estatus,
        Aula, 
        Inicio, 
        Fin, 
        Dias, 
        Jornada, 
        Capacidad, 
        Cupo, 
        Matriculados, 
        Pre_Matriculados, 
        Acepta_LE, 
        Lista_Espera
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};

