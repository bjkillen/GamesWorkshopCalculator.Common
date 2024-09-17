"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelDatasheet {
    constructor(id, name, toughness, armorSaveSkill, invulnerableSave, invulnerableSaveSkill, wargear, wounds) {
        this.id = id;
        this.name = name;
        this.toughness = toughness;
        this.armorSaveSkill = armorSaveSkill;
        this.invulnerableSave = invulnerableSave;
        this.invulnerableSaveSkill = invulnerableSaveSkill;
        this.wargear = wargear;
        this.wounds = wounds;
    }
}
exports.default = ModelDatasheet;
