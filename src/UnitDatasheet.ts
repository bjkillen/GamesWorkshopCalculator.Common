import ModelDatasheet from "./ModelDatasheet";
import Wargear from "./Wargear";

class UnitDatasheet {
    constructor (
        public id: string,
        public name: string,
        public factionId: string,
        public modelDatasheets: ModelDatasheet[],
        public wargear: Wargear[],
    ) {}
}

export default UnitDatasheet;