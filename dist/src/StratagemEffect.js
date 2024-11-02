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
const DiceSkillValue_1 = __importDefault(require("./enums/DiceSkillValue"));
const DiceRerollModifierValue_1 = __importDefault(require("./enums/DiceRerollModifierValue"));
const StratagemQuestion_1 = __importDefault(require("./StratagemQuestion"));
const StratagemType_1 = __importDefault(require("./enums/StratagemType"));
let StratagemEffect = class StratagemEffect {
    constructor(stratagemID, factionID, cpCost, restriction, question, type, sustainedHits, criticalHits, criticalWounds, minusOneDamage, feelNoPain, toWoundPlusOne, rerollHits, bonusAttacks, stealth, bonusAP, bonusStrength, setWeaponSkill, toHitPlusOne, setInvulnerableSkill, toWoundMinusOne, lethalHits, reducesAP, questions) {
        this.stratagemID = stratagemID;
        this.factionID = factionID;
        this.cpCost = cpCost;
        this.restriction = restriction;
        this.question = question;
        this.type = type;
        this.sustainedHits = sustainedHits;
        this.criticalHits = criticalHits;
        this.criticalWounds = criticalWounds;
        this.minusOneDamage = minusOneDamage;
        this.feelNoPain = feelNoPain;
        this.toWoundPlusOne = toWoundPlusOne;
        this.rerollHits = rerollHits;
        this.bonusAttacks = bonusAttacks;
        this.stealth = stealth;
        this.bonusAP = bonusAP;
        this.bonusStrength = bonusStrength;
        this.setWeaponSkill = setWeaponSkill;
        this.toHitPlusOne = toHitPlusOne;
        this.setInvulnerableSkill = setInvulnerableSkill;
        this.toWoundMinusOne = toWoundMinusOne;
        this.lethalHits = lethalHits;
        this.reducesAP = reducesAP;
        this.questions = questions;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], StratagemEffect.prototype, "stratagemID", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], StratagemEffect.prototype, "factionID", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "cpCost", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], StratagemEffect.prototype, "restriction", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "question", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", StratagemType_1.default)
], StratagemEffect.prototype, "type", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "sustainedHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemEffect.prototype, "criticalHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemEffect.prototype, "criticalWounds", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "minusOneDamage", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemEffect.prototype, "feelNoPain", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "toWoundPlusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceRerollModifierValue_1.default)
], StratagemEffect.prototype, "rerollHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "bonusAttacks", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "stealth", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "bonusAP", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "bonusStrength", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemEffect.prototype, "setWeaponSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "toHitPlusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemEffect.prototype, "setInvulnerableSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "toWoundMinusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemEffect.prototype, "lethalHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemEffect.prototype, "reducesAP", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(StratagemQuestion_1.default),
    __metadata("design:type", Array)
], StratagemEffect.prototype, "questions", void 0);
StratagemEffect = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, Number, Object, Boolean, StratagemType_1.default, Object, Object, Object, Object, Object, Boolean, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Number, Array])
], StratagemEffect);
exports.default = StratagemEffect;
