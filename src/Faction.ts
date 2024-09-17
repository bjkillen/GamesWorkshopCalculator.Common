import 'reflect-metadata';

import UnitDatasheet from "./UnitDatasheet";
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';

@jsonObject
class Faction {
    @jsonMember
    public id: string;

    @jsonMember
    public name: string;

    @jsonArrayMember(UnitDatasheet)
    public unitDatasheets: UnitDatasheet[];

    constructor(id: string, name: string, unitDatasheets: UnitDatasheet[]) {
        this.id = id;
        this.name = name;
        this.unitDatasheets = unitDatasheets;
    }
}

export default Faction;