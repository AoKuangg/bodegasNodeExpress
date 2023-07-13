import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { Inventario } from "../controller/inventarios.js";

const DtoInventario = express();

DtoInventario.use((req,res,next)=>{
    try {
        let data = plainToClass(Inventario, req.body,{
            excludeExtraneousValues: true,
        });
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
});

export default DtoInventario;