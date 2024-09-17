"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wargear {
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
}
exports.default = Wargear;
