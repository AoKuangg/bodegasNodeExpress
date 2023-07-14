import {Router} from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import DtoInventario from "../Middleware/DTOInventario";
const appInventarios = Router();
dotenv.config();

let con = undefined;
appInventarios.use((req,res,next)=>{
    try {
      let config_con = JSON.parse(process.env.CONECTION);
      con = mysql.createPool(config_con);
      next();
    } catch (error) {
        res.status(500).send("Connection error")
    }
});


appInventarios.post("/", DtoInventario, (req, res) => {
  const { id_producto, id_bodega, cantidad } = req.body;
  const datos = Object.values(req.body);
  con.query(
    `SELECT * FROM inventarios WHERE id_bodega = ? AND id_producto = ?`,
    [id_bodega, id_producto],
    (err, data, fill) => {
      if (data.length === 0) {
        con.query(
          `INSERT INTO inventarios (id,id_bodega,id_producto,cantidad,created_by,updated_by, created_at, updated_at, deleted_at) VALUES (?,?,?,?,?,?,?,?,?)`,
          datos,
          (err, data, fill) => {
            res.send("DATA INSERTED-> " + datos);
          }
        );
      } else {
        const cantidadActual = data[0].cantidad;
        const cantidadNueva = cantidadActual + cantidad;
        conn.query(
          `UPDATE FROM inventarios SET cantidad = ? WHERE id_producto = ? AND id_bodega = ?`,
          [cantidadNueva, id_producto, id_bodega],
          (err, data, fill) => {
            res.send("DATA UPDATED (nueva cantidad)-> " + cantidadNueva);
          }
        );
      }
    }
  );
});

export default appInventarios;