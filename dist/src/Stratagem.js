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
const StratagemEffect_1 = __importDefault(require("./StratagemEffect"));
let Stratagem = class Stratagem {
    constructor(id, factionID, name, turn, phase, detachment, description, effect) {
        this.id = id;
        this.factionID = factionID;
        this.name = name;
        this.turn = turn;
        this.phase = phase;
        this.detachment = detachment;
        this.description = description;
        this.stratagemEffect = effect;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "id", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "factionID", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "name", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "turn", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "phase", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "detachment", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Stratagem.prototype, "description", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", StratagemEffect_1.default)
], Stratagem.prototype, "stratagemEffect", void 0);
Stratagem = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, StratagemEffect_1.default])
], Stratagem);
exports.default = Stratagem;
