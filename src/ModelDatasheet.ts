import { DiceSkillValueEnum } from "./enums/DiceSkillValue";
import Wargear from "./Wargear";

class ModelDatasheet {
    constructor (
        public datasheetId: string,
        public name: string,
        public toughness: number,
        public armorSaveSkill: DiceSkillValueEnum,
        public invulnerableSave: boolean,
        public invulnerableSaveSkill: DiceSkillValueEnum,
        public wounds: number
    ) {}
}

export default ModelDatasheet;