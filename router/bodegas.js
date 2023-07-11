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



appBodegas.post("/",(req, res)=>{
    const {id,nombre,id_responsable,estado,created_by} = req.body;
    if (!id || !nombre || !id_responsable || !estado || !created_by) {
        return res.status(400).send("Faltan datos de entrada");
    }
    con.query(
        `SELECT id FROM users WHERE id = ?`,
        [id_responsable],(error,results) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error executing query");
            } else if(results.length ===0){
                res.status(500).send("Error the user doesn't exist in the users table")
            }else{
                con.query(
                    `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by) VALUES (?, ?, ?, ?, ?)`,
                    (error, results) => {
                        if (error){
                            console.log(error);
                            res.status(500).send("Error executing query");
                        }else{
                            console.log(results);
                            res.status(200).send("New Bodega added successfully")
                        }
                    }
                )
            }
        });
});



export default appBodegas;