"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitDatasheet {
    constructor(name, toughness, armorSaveSkill, invulnerableSave, invulnerableSaveSkill, wargear) {
        this.name = name;
        this.toughness = toughness;
        this.armorSaveSkill = armorSaveSkill;
        this.invulnerableSave = invulnerableSave;
        this.invulnerableSaveSkill = invulnerableSaveSkill;
        this.wargear = wargear;
    }
}
exports.default = UnitDatasheet;
