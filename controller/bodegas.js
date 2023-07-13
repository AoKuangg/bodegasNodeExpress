var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class Bodega {
    constructor(id, nombre, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at) {
        this.id = id;
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
        this.updated_by = updated_by;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Bodega.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato nombre no es valido` }; }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Bodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Bodega.prototype, "estado", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Type(() => String),
    __metadata("design:type", String)
], Bodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "updated_by" }),
    Type(() => String),
    __metadata("design:type", String)
], Bodega.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: "created_at" }),
    Type(() => String),
    __metadata("design:type", String)
], Bodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "updated_at" }),
    Type(() => String),
    __metadata("design:type", String)
], Bodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "deleted_at" }),
    Type(() => String),
    __metadata("design:type", String)
], Bodega.prototype, "deleted_at", void 0);
