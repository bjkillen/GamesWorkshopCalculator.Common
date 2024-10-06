import { jsonMember, jsonObject } from "typedjson";
import DiceSkillValue from "./enums/DiceSkillValue";
import WargearType from "./enums/WargearType";

@jsonObject
class Wargear {
    @jsonMember
    public datasheetId: string;

    @jsonMember
    public name: string;

    @jsonMember
    public description: string;

    @jsonMember
    public range?: number;

    @jsonMember
    public type: WargearType;

    @jsonMember
    public attacks: string;

    @jsonMember
    public skill?: DiceSkillValue;

    @jsonMember
    public strength: number;

    @jsonMember
    public armorPenetration: number;

    @jsonMember
    public damage: string;

    constructor (
        datasheetId: string,
        name: string,
        description: string,
        range: number | undefined,
        type: WargearType,
        attacks: string,
        skill: DiceSkillValue | undefined,
        strength: number,
        armorPenetration: number,
        damage: string,
    ) {
        this.datasheetId = datasheetId;
        this.name = name;
        this.description = description;
        this.range = range;
        this.type = type;
        this.attacks = attacks;
        this.skill = skill;
        this.strength = strength;
        this.armorPenetration = armorPenetration;
        this.damage = damage;
    }
}

export default Wargear;