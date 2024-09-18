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
const typedjson_1 = require("typedjson");
const DiceSkillValue_1 = __importDefault(require("./enums/DiceSkillValue"));
let Wargear = class Wargear {
    constructor(datasheetId, name, description, attacks, skill, strength, armorPenetration, damage) {
        this.datasheetId = datasheetId;
        this.name = name;
        this.description = description;
        this.attacks = attacks;
        this.skill = skill;
        this.strength = strength;
        this.armorPenetration = armorPenetration;
        this.damage = damage;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Wargear.prototype, "datasheetId", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Wargear.prototype, "name", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Wargear.prototype, "description", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Wargear.prototype, "attacks", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], Wargear.prototype, "skill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], Wargear.prototype, "strength", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], Wargear.prototype, "armorPenetration", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], Wargear.prototype, "damage", void 0);
Wargear = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, String, String, DiceSkillValue_1.default, Number, Number, String])
], Wargear);
exports.default = Wargear;
