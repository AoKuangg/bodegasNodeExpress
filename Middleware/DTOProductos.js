import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { Producto } from "../controller/productos.js";

const DtoProductos = express();
DtoProductos.use((req, res, next) => {
  try {
    let data = plainToClass(Producto, req.body, {
      excludeExtraneousValues: true,
    });
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default DtoProductos;