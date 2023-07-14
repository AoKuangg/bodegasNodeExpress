#  Taller de node.js  Gestion de bodegas
En este proyecto de backend se crean endpoints con los cuales se pueden realizar consultas a una base de datos de MySQL.

## Installation
Instala las dependecias necesarias de forma automatica con el comando: 
```bash
    npm install
```
## [BASE DE DATOS]
Al clonar tendras en la carpeta llamada "database" podras usar tener el codigo de la base de datos de MySQL y con los datos de prueba.

## {Variables de entorno}
En el proyecto se usan variables de entorno, recuerda poner las tuyas al utilizar el proyecto
```bash
    MY_CONFIG={"hostname": "","port":}
    MY_CONNECTION={"host": "","user":"","database":"","password":"","port":}
```

## {ENDPOINTs}
Mediante el uso de los endpoints se pueden acceder a distintas peticiones

Para acceder al endpoint de bodegas se usa  "/bodegas" al final de la url

Para acceder el endpoint de iventario se usa "/inventarios" al final de la url

Para acceder el endpoint de iventario se usa "/productos" al final de la url


## Lenguajes utilizados

En este proyecto se utilizo: Typescript, Sql, JavaScript con Node.js y Express

## Errores
Fue necesario cambiar los nombres de varias bodegas ya que por requerimientos no se pueden tener nombres iguales en la bodega.