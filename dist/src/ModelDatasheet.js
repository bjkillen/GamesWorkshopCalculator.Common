"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelDatasheet {
    constructor(datasheetId, name, toughness, armorSaveSkill, invulnerableSave, invulnerableSaveSkill, wounds) {
        this.datasheetId = datasheetId;
        this.name = name;
        this.toughness = toughness;
        this.armorSaveSkill = armorSaveSkill;
        this.invulnerableSave = invulnerableSave;
        this.invulnerableSaveSkill = invulnerableSaveSkill;
        this.wounds = wounds;
    }
}
exports.default = ModelDatasheet;
