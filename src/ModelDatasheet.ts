import 'reflect-metadata';
import { jsonObject, jsonMember } from 'typedjson';

import DiceSkillValue, { DiceSkillValueDeserializer } from "./enums/DiceSkillValue";

@jsonObject
class ModelDatasheet {
    @jsonMember
    public datasheetId: string;

    @jsonMember
    public name: string;

    @jsonMember
    public toughness: number;

    @jsonMember({deserializer: DiceSkillValueDeserializer})
    public armorSaveSkill: DiceSkillValue | undefined;

    @jsonMember
    public invulnerableSave: boolean;

    @jsonMember({deserializer: DiceSkillValueDeserializer})
    public invulnerableSaveSkill: DiceSkillValue | undefined;

    @jsonMember
    public wounds: number;

    constructor (
        datasheetId: string,
        name: string,
        toughness: number,
        armorSaveSkill: DiceSkillValue | undefined,
        invulnerableSave: boolean,
        invulnerableSaveSkill: DiceSkillValue | undefined,
        wounds: number
    ) {
        this.datasheetId = datasheetId;
        this.name = name;
        this.toughness = toughness;
        this.armorSaveSkill = armorSaveSkill;
        this.invulnerableSave = invulnerableSave;
        this.invulnerableSaveSkill = invulnerableSaveSkill;
        this.wounds = wounds;
    }
}

export default ModelDatasheet;