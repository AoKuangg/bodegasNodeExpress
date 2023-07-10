import {Router} from "express";
import mysql from "mysql2";

const appBodegas = Router();

let con = undefined;
appBodegas.use((req,res,next)=>{
    try {
        con = mysql.createPool({
            host: "127.0.0.1",
            user:"campus",
            password: "campus2023",
            database: "Prueba_Desarrollo_BackEnd_Y_SQL",
            port: 3306
        });
        next();
    } catch (error) {
        res.status(500).send("Connection error")
    }
});


appBodegas.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT * FROM bodegas`
        ),
    (error,data,fils)=>{
        console.log(error);
        console.log(data);
        res.status(200).send(data);
    }
});

export default appBodegas