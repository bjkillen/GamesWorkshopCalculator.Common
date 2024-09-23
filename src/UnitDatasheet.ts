import 'reflect-metadata';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';

import ModelDatasheet from "./ModelDatasheet";
import Wargear from "./Wargear";
import Keyword from './Keyword';
import DatasheetAbility from './DatasheetAbility';

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

    @jsonArrayMember(Keyword)
    public keywords: Keyword[];

    @jsonArrayMember(DatasheetAbility)
    public abilities: DatasheetAbility[];

    constructor (
        id: string,
        name: string,
        factionId: string,
        modelDatasheets: ModelDatasheet[],
        wargear: Wargear[],
        keywords: Keyword[],
        abilities: DatasheetAbility[],
    ) {
        this.id = id;
        this.name = name;
        this.factionId = factionId;
        this.modelDatasheets = modelDatasheets;
        this.wargear = wargear;
        this.keywords = keywords;
        this.abilities = abilities;
    }
}

export default UnitDatasheet;