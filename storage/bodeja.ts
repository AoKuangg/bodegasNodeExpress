import { Type, Transform, Expose } from "class-transformer";

export class bodegas{
    @Expose({ name: "id" })
    @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
    id: number;
  
    @Expose({ name: "nombre" })
    @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre no es valido` } })
    nombre: string;
  
    @Expose({ name: "id_responsable" })
    @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
    id_responsable: number;
  
    @Expose({ name: "estado" })
    @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
    estado: number;
  
    @Expose({ name: "created_by" })
    @Type(() => String)
    created_by: string;
  
    @Expose({ name: "updated_by" })
    @Type(() => String)
    updated_by: string;
  
    @Expose({ name: "created_at" })
    @Type(() => String)
    created_at: string;

    constructor(id: number, nombre: string, id_responsable: number, estado: number, created_by: string, updated_by: string, created_at: string) {
        this.id = id;
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
        this.updated_by = updated_by;
        this.created_at = created_at;
    }
}