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
const FactionStratagems_1 = __importDefault(require("./FactionStratagems"));
let FactionStratagemsMap = class FactionStratagemsMap {
    constructor(map) {
        this.map = map;
    }
};
__decorate([
    (0, typedjson_1.jsonMapMember)(String, FactionStratagems_1.default),
    __metadata("design:type", Map)
], FactionStratagemsMap.prototype, "map", void 0);
FactionStratagemsMap = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [Map])
], FactionStratagemsMap);
exports.default = FactionStratagemsMap;
