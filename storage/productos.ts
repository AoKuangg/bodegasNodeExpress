import { Expose, Type, Transform } from "class-transformer";

export class Producto{

  @Expose({ name: "id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id: number;

  @Expose({ name: "nombre" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre no es valido` } })
  nombre: string;

  @Expose({ name: "estado" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  estado: number;


  constructor(id: number, nombre: string, estado: number){
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
  }
}