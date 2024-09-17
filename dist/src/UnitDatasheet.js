"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitDatasheet {
    constructor(id, name, factionId, modelDatasheets, wargear) {
        this.id = id;
        this.name = name;
        this.factionId = factionId;
        this.modelDatasheets = modelDatasheets;
        this.wargear = wargear;
    }
}
exports.default = UnitDatasheet;
