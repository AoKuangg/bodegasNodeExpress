import dotenv from "dotenv";
import express from "express";
import appBodegas from "./router/bodegas.js";
import appProductos from "./router/productos.js";
import appInventarios from "./router/inventario.js";
dotenv.config();

const expressapp = express();

expressapp.use(express.json());

expressapp.use("/bodega",appBodegas);

expressapp.use("/productos",appProductos);

expressapp.use("/inventarios",appInventarios);








let config = JSON.parse(process.env.MY_CONFIG);
expressapp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});