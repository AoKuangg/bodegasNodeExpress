import {Router} from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
const appBodegas = Router();
dotenv.config();

let con = undefined;
appBodegas.use((req,res,next)=>{
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

export default appBodegas