import DiceSkillValue from "./enums/DiceSkillValue";

class Wargear {
    constructor (
        public datasheetId: string,
        public name: string,
        public description: string,
        public attacks: number,
        public skill: DiceSkillValue,
        public strength: number,
        public armorPenetration: number,
        public damage: number,
    ) {}
}

export default Wargear;