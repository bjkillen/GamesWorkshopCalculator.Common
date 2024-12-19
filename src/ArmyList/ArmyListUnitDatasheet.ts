import 'reflect-metadata';

import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import UnitDatasheet from '../UnitDatasheet';
import ArmyListModelDatasheet from './ArmyListModelDatasheet';
import ArmyListWargear from './ArmyListWargear';

@jsonObject
export default class ArmyListUnitDatasheet {
    @jsonMember
    public guid: string;

    @jsonMember
    public datasheet: UnitDatasheet;

    @jsonMember
    public points: number;

    @jsonArrayMember(ArmyListModelDatasheet)
    public modelDatasheets: ArmyListModelDatasheet[];

    @jsonArrayMember(ArmyListWargear)
    public chosenWargear: ArmyListWargear[];

    constructor(
        guid: string,
        datasheet: UnitDatasheet,
        points: number,
        modelDatasheets: ArmyListModelDatasheet[],
        chosenWargear: ArmyListWargear[]
    ) {
        this.guid = guid;
        this.datasheet = datasheet;
        this.points = points;
        this.modelDatasheets = modelDatasheets;
        this.chosenWargear = chosenWargear;
    }
}
