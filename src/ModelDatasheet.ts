import { DiceSkillValueEnum } from "./enums/DiceSkillValue";
import Wargear from "./Wargear";

class ModelDatasheet {
    constructor (
        public id: string,
        public name: string,
        public toughness: number,
        public armorSaveSkill: DiceSkillValueEnum,
        public invulnerableSave: boolean,
        public invulnerableSaveSkill: DiceSkillValueEnum,
        public wargear: Wargear[],
        public wounds: number
    ) {}
}

export default ModelDatasheet;