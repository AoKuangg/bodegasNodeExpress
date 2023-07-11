import {Router} from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
const appProductos = Router();
dotenv.config();

let con = undefined;
appProductos.use((req,res,next)=>{
    try {
        con = mysql.createPool({
            host: process.env.HOST,
            user:process.env.USUARIO,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT,
        });
        next();
    } catch (error) {
        res.status(500).send("Connection error")
    }
});

appProductos.get("/",(req,res)=>{
    con.query(``)
});