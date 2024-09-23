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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedjson_1 = require("typedjson");
const DiceSkillValue_1 = require("./enums/DiceSkillValue");
let ModelDatasheet = class ModelDatasheet {
    constructor(datasheetId, name, toughness, armorSaveSkill, invulnerableSave, invulnerableSaveSkill, wounds) {
        this.datasheetId = datasheetId;
        this.name = name;
        this.toughness = toughness;
        this.armorSaveSkill = armorSaveSkill;
        this.invulnerableSave = invulnerableSave;
        this.invulnerableSaveSkill = invulnerableSaveSkill;
        this.wounds = wounds;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], ModelDatasheet.prototype, "datasheetId", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], ModelDatasheet.prototype, "name", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], ModelDatasheet.prototype, "toughness", void 0);
__decorate([
    (0, typedjson_1.jsonMember)({ deserializer: DiceSkillValue_1.DiceSkillValueDeserializer }),
    __metadata("design:type", Object)
], ModelDatasheet.prototype, "armorSaveSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], ModelDatasheet.prototype, "invulnerableSave", void 0);
__decorate([
    (0, typedjson_1.jsonMember)({ deserializer: DiceSkillValue_1.DiceSkillValueDeserializer }),
    __metadata("design:type", Object)
], ModelDatasheet.prototype, "invulnerableSaveSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], ModelDatasheet.prototype, "wounds", void 0);
ModelDatasheet = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, Number, Object, Boolean, Object, Number])
], ModelDatasheet);
exports.default = ModelDatasheet;
