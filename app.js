import dotenv from "dotenv";
import express from "express";
import appBodegas from "./router/bodegas.js";
dotenv.config();

const expressapp = express();

expressapp.use(express.json());

expressapp.use("/bodega",appBodegas);








let config = JSON.parse(process.env.MY_CONFIG);
expressapp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});