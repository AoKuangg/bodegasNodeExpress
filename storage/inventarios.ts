import { Expose, Type, Transform } from "class-transformer";

export class Inventario{

  @Expose({ name: "id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id: number;

  @Expose({ name: "id_bodega" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id_bodega: number;

  @Expose({ name: "id_producto" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id_producto: number;

  @Expose({ name: "cantidad" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  cantidad: number;


  constructor(id: number, id_bodega: number, id_producto: number, cantidad: number){
    this.id = id;
    this.id_bodega = id_bodega;
    this.id_producto = id_producto;
    this.cantidad = cantidad;
  }
}