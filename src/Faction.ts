import UnitDatasheet from "./UnitDatasheet";

class Faction {
    constructor (
        public id: string,
        public name: string,
        public unitDatasheets: UnitDatasheet[],
    ) {}
}

export default Faction;