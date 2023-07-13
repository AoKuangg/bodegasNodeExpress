import {Router} from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
const appBodegas = Router();
dotenv.config();

let con = undefined;
appProductos.use((req,res,next)=>{
    try {
      let config_con = JSON.parse(process.env.CONECTION);
      con = mysql.createPool(config_con);
      next();
    } catch (error) {
        res.status(500).send("Connection error")
    }
});


appBodegas.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT * FROM bodegas ORDER BY nombre ASC`, (error,data,fields)=>{
            if(error){
                console.log(error);
                res.status(500).send("Error executing query");
            }else{
                console.log(data);
                res.status(200).send(data);
            }
    });
});



appBodegas.post("/", (req, res) => {
    const { id, nombre, id_responsable, estado, created_by, created_at } = req.body;
  
    // Validar si los campos requeridos están presentes
    if (!id || !nombre || !id_responsable || !estado || !created_by ||!created_at) {
      return res.status(400).send("Faltan datos de entrada");
    }
  
    con.query(
      `SELECT id FROM users WHERE id = ?`,
      [id_responsable],
      (error, deriva) => {
        if (error) {
          res.status(500).send("Error connection rejected");
        } else if (deriva.length === 0) {
          res.status(500).send("Error: el usuario no existe en la tabla de usuarios");
        } else {
          con.query(
            `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by,created_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [id, nombre, id_responsable, estado, created_by,created_at],
            (error, results) => {
              if (error) {
                console.log(error);
                res.status(500).send("Error executing query");
              } else {
                console.log(results);
                res.status(200).send("Nueva bodega agregada exitosamente");
              }
            }
          );
        }
      }
    );
  });



export default appBodegas;