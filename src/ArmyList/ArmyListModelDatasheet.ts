import 'reflect-metadata';

import ModelDatasheet from '../ModelDatasheet';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject
export default class ArmyListModelDatasheet {
    @jsonMember
    public modelDatasheet: ModelDatasheet;

    @jsonMember
    public count: number;

    constructor(modelDatasheet: ModelDatasheet, count: number) {
        this.modelDatasheet = modelDatasheet;
        this.count = count;
    }
}