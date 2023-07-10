-- Active: 1689018436135@@127.0.0.1@3306@Prueba_Desarrollo_BackEnd_Y_SQL
CREATE DATABASE Prueba_Desarrollo_BackEnd_Y_SQL;

USE Prueba_Desarrollo_BackEnd_Y_SQL;

CREATE TABLE users(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    email_verified_at TIMESTAMP,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    foto VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE bodegas(
    id BIGINT(20) UNSIGNED NOT NULl PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_responsable BIGINT(20) UNSIGNED NOT NULL,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    Foreign Key (id_responsable) REFERENCES users(id),
    Foreign Key (created_by) REFERENCES users(id),
    Foreign Key (update_by) REFERENCES users(id)
);

CREATE TABLE inventarios(
    id BIGINT(20) UNSIGNED NOT NULL PRIMARY KEY,
    id_bodega BIGINT(20) UNSIGNED NOT NULL ,
    id_producto BIGINT(20) UNSIGNED NOT NULL,
    cantidad INT(11) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    Foreign Key (created_by) REFERENCES users(id),
    Foreign Key (update_by) REFERENCES users(id),
    Foreign Key (id_producto) REFERENCES productos(id),
    Foreign Key (id_bodega) REFERENCES bodegas(id)
);

CREATE TABLE productos(
    id BIGINT(20) UNSIGNED NOT NULL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    Foreign Key (created_by) REFERENCES users(id),
    Foreign Key (update_by) REFERENCES users(id)
);

CREATE TABLE historiales(
    id BIGINT(20) UNSIGNED NOT NULL PRIMARY KEY,
    cantidad INT(11) NOT NULL,
    id_bodega_origen BIGINT(20) UNSIGNED NOT NULL,
    id_bodega_destino BIGINT(20) UNSIGNED NOT NULL,
    id_inventario BIGINT(20) UNSIGNED NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    Foreign Key (created_by) REFERENCES users(id),
    Foreign Key (update_by) REFERENCES users(id),
    Foreign Key (id_inventario) REFERENCES inventarios(id),
    Foreign Key (id_bodega_origen) REFERENCES bodegas(id),
    Foreign Key (id_bodega_destino) REFERENCES bodegas(id)
);