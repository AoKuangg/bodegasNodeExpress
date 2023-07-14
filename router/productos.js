import {Router} from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import DtoProductos from "../Middleware/DTOProductos.js";
const appProductos = Router();
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

appProductos.get("/",(req,res)=>{
    con.query(`
    SELECT productos.*, SUM(inventarios.cantidad) AS Total FROM productos INNER JOIN inventarios ON productos.id = inventarios.id_producto GROUP BY productos.id ORDER BY Total DESC`,
      (error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send("Connection error");
        }else(
            res.status(200).send(result)
        )
    })
});

appProductos.post("/",DtoProductos ,(req, res) => {
    const { id,nombre,  descripcion,cantidad ,id_inv} = req.body;
    con.query(
      "INSERT INTO productos (id, nombre, descripcion) VALUES (?,?, ?)",
      [id,nombre,  descripcion],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        } else {
          const  id_producto = id;
          con.query(
            "SELECT id FROM bodegas WHERE nombre = ?",
            ["bodega0"],
            (err, result) => {
              if (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
              } else {
                const  id_bodega = result[0].id;
                con.query(
                  "INSERT INTO inventarios ( id,id_producto,  id_bodega, cantidad) VALUES (?, ?, ?,?)",
                  [ id_inv,id_producto,  id_bodega, cantidad],
                  (err) => {
                    if (err) {
                      console.error(err);
                      res.status(500).send("Internal Server Error");
                    } else {
                      res.status(200).send("Producto insertado correctamente");
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });


appProductos.put("/",DtoProductos,(req,res) => {
  const { id_producto, cantidad, id_bodegaOrigen, id_bodegaDestino } = req.body;
  con.query(
    `SELECT cantidad FROM inventarios WHERE id_producto = ? AND id_bodega = ?`,
    [id_producto, id_bodegaOrigen],
    (err, data, fil) => {
      const cantidadDisponible = data[0].cantidad;
      if (cantidad > cantidadDisponible) {
        res.send("No esta disponible esa cantidad");
      } else {
        // Restar la cantidad de la bodega de origen
        con.query(
          `UPDATE inventarios SET cantidad = cantidad - ? WHERE id_producto = ? AND id_bodega = ?`,
          [cantidad, id_producto, id_bodegaOrigen]
        );

        // Sumar la cantidad a la bodega de destino
        con.query(
          `UPDATE inventarios SET cantidad = cantidad + ? WHERE id_producto = ? AND id_bodega = ?`,
          [cantidad, id_producto, id_bodegaDestino]
        );
        res.send("Update");
      }
    }
  );
});





export default appProductos;