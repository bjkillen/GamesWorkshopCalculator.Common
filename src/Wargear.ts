import { jsonMember, jsonObject } from "typedjson";
import DiceSkillValue from "./enums/DiceSkillValue";

@jsonObject
class Wargear {
    @jsonMember
    public datasheetId: string;

    @jsonMember
    public name: string;

    @jsonMember
    public description: string;

    @jsonMember
    public attacks: number;

    @jsonMember
    public skill: DiceSkillValue;

    @jsonMember
    public strength: number;

    @jsonMember
    public armorPenetration: number;

    @jsonMember
    public damage: number;

    constructor (
        datasheetId: string,
        name: string,
        description: string,
        attacks: number,
        skill: DiceSkillValue,
        strength: number,
        armorPenetration: number,
        damage: number,
    ) {
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

export default Wargear;