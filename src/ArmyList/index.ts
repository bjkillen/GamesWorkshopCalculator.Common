import 'reflect-metadata';

import Faction from '../Faction';
import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import ArmyListUnitDatasheet from './ArmyListUnitDatasheet';

@jsonObject
class ArmyList {
    @jsonMember
    public faction: Faction;

    @jsonArrayMember(ArmyListUnitDatasheet)
    public unitDatasheets: ArmyListUnitDatasheet[];

    constructor(faction: Faction, unitDatasheets: ArmyListUnitDatasheet[]) {
        this.faction = faction;
        this.unitDatasheets = unitDatasheets;
    }
}

export default ArmyList;
