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
const DiceRerollModifierValue_1 = __importDefault(require("./enums/DiceRerollModifierValue"));
let StratagemQuestion = class StratagemQuestion {
    constructor(stratagemID, questionText, sustainedHits, criticalHits, criticalWounds, minusOneDamage, feelNoPain, toWoundPlusOne, rerollHits, bonusAttacks, stealth, bonusAP, bonusStrength, setWeaponSkill, toHitPlusOne, setInvulnerableSkill, toWoundMinusOne, lethalHits, reducesAP) {
        this.stratagemID = stratagemID;
        this.questionText = questionText;
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
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], StratagemQuestion.prototype, "stratagemID", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], StratagemQuestion.prototype, "questionText", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemQuestion.prototype, "sustainedHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemQuestion.prototype, "criticalHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemQuestion.prototype, "criticalWounds", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "minusOneDamage", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemQuestion.prototype, "feelNoPain", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "toWoundPlusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceRerollModifierValue_1.default)
], StratagemQuestion.prototype, "rerollHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemQuestion.prototype, "bonusAttacks", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "stealth", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemQuestion.prototype, "bonusAP", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemQuestion.prototype, "bonusStrength", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemQuestion.prototype, "setWeaponSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "toHitPlusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", DiceSkillValue_1.default)
], StratagemQuestion.prototype, "setInvulnerableSkill", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "toWoundMinusOne", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Boolean)
], StratagemQuestion.prototype, "lethalHits", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], StratagemQuestion.prototype, "reducesAP", void 0);
StratagemQuestion = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, Object, Object, Object, Object, Object, Boolean, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Number])
], StratagemQuestion);
exports.default = StratagemQuestion;
