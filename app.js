import dotenv from "dotenv";
import express from "express";
dotenv.config();

const expressapp = express();









let config = JSON.parse(process.env.MY_CONFIG);
expressapp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});