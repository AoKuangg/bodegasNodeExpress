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


appInventarios.post('/', DtoInventario,(req, res) => {
    const { id,id_producto, id_bodega, cantidad } = req.body;
  
    con.query(
      'SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?',
      [id_producto, id_bodega],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error en el servidorXD');
        }
        if (results.length === 0) {
          con.query(
            'INSERT INTO inventarios (id,id_producto, id_bodega, cantidad) VALUES (?, ?, ?,?)',
            [id,id_producto, id_bodega, cantidad],
            (error) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error en el servidorJASJSAJSA');
              }
               res.status(200).send('Registro insertado exitosamente');
            }
          );
        } else {
          const existingQuantity = results[0].cantidad;
          const newQuantity = existingQuantity + cantidad;
          con.query(
            'UPDATE inventarios SET cantidad = ? WHERE id_producto = ? AND id_bodega = ?',
            [newQuantity, id_producto, id_bodega],
            (error) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error en el servidor IDK');
              }
                res.status(200).send('Registro actualizado exitosamente');
            }
          );
        }
      }
    );
  });

export default appInventarios;