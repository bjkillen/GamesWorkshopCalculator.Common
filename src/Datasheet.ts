import ModelDatasheet from "./ModelDatasheet";

class UnitDatasheet {
    constructor (
        public id: string,
        public name: string,
        public factionId: string,
        public modelDatasheets: ModelDatasheet[],
    ) {}
}

export default UnitDatasheet;