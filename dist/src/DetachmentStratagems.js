"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedjson_1 = require("typedjson");
const Stratagem_1 = __importDefault(require("./Stratagem"));
let DetachmentStratagems = class DetachmentStratagems {
    constructor(name, stratagems) {
        this.name = name;
        this.stratagems = stratagems;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], DetachmentStratagems.prototype, "name", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(Stratagem_1.default),
    __metadata("design:type", Array)
], DetachmentStratagems.prototype, "stratagems", void 0);
DetachmentStratagems = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, Array])
], DetachmentStratagems);
exports.default = DetachmentStratagems;
