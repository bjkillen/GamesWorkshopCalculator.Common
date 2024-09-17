"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wargear {
    constructor(name, attacks, skill, armorPenetration, damage, sustainedHits, sustainedHitsCount, lethalHits) {
        this.name = name;
        this.attacks = attacks;
        this.skill = skill;
        this.armorPenetration = armorPenetration;
        this.damage = damage;
        this.sustainedHits = sustainedHits;
        this.sustainedHitsCount = sustainedHitsCount;
        this.lethalHits = lethalHits;
    }
}
exports.default = Wargear;
