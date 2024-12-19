import 'reflect-metadata';

import Wargear from '../Wargear';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject
export default class ArmyListWargear {
    @jsonMember
    public guid: string;

    @jsonMember
    public wargear: Wargear;

    @jsonMember
    public count: number;

    constructor(guid: string, wargear: Wargear, count: number) {
        this.guid = guid;
        this.wargear = wargear;
        this.count = count;
    }
}
