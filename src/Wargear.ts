import { DiceSkillValueEnum } from "./enums/DiceSkillValue";

class Wargear {
    constructor (
        public datasheetId: string,
        public name: string,
        public description: string,
        public attacks: number,
        public skill: DiceSkillValueEnum,
        public strength: number,
        public armorPenetration: number,
        public damage: number,
    ) {}
}

export default Wargear;