import DiceSkillValue from "./enums/DiceSkillValue";
import Wargear from "./Wargear";

class UnitDatasheet {
    constructor (
        public id: string,
        public name: string,
        public toughness: number,
        public armorSaveSkill: DiceSkillValue,
        public invulnerableSave: boolean,
        public invulnerableSaveSkill: DiceSkillValue,
        public wargear: Wargear[],
        public wounds: number
    ) {}
}

export default UnitDatasheet;