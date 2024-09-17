import 'reflect-metadata';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';

import ModelDatasheet from "./ModelDatasheet";
import Wargear from "./Wargear";

@jsonObject
class UnitDatasheet {
    @jsonMember
    public id: string;

    @jsonMember
    public name: string;

    @jsonMember
    public factionId: string;

    @jsonArrayMember(ModelDatasheet)
    public modelDatasheets: ModelDatasheet[];

    @jsonArrayMember(Wargear)
    public wargear: Wargear[];

    constructor (
        id: string,
        name: string,
        factionId: string,
        modelDatasheets: ModelDatasheet[],
        wargear: Wargear[],
    ) {
        this.id = id;
        this.name = name;
        this.factionId = factionId;
        this.modelDatasheets = modelDatasheets;
        this.wargear = wargear;
    }
}

export default UnitDatasheet;