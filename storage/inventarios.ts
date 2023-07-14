import { Expose, Type, Transform } from "class-transformer";

export class Inventario{

  @Expose({ name: "id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id: number;

  @Expose({ name: "id_bodega" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id_bodega: number;


  @Expose({ name: "id_number" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id_producto: number;

  @Expose({ name: "cantidad" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  cantidad: number;


  @Expose({ name: "created_by" })
  @Type(() => String)
  created_by: string;

  @Expose({ name: "updated_by" })
  @Type(() => String)
  updated_by: string;

  @Expose({ name: "created_at" })
  @Type(() => String)
  created_at: string;

  @Expose({ name: "updated_at" })
  @Type(() => String)
  updated_at: string;


  @Expose({ name: "deleted_at" })
  @Type(() => String)
  deleted_at: string;

  constructor(id: number, id_bodega: number, id_producto: number, cantidad: number, created_by: string, updated_by: string, created_at: string, updated_at: string, deleted_at: string){
    this.id = id;
    this.id_bodega = id_bodega;
    this.id_producto = id_producto;
    this.cantidad = cantidad;
    this.created_by = created_by;
    this.updated_by = updated_by;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}