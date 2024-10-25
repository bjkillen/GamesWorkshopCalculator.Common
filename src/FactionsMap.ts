import 'reflect-metadata';

import { jsonObject, jsonMapMember } from 'typedjson';
import Faction from './Faction';

@jsonObject
class FactionsMap {
    @jsonMapMember(String, Faction)
    public map: Map<string, Faction>;

    constructor(map: Map<string, Faction>) {
        this.map = map;
    }
}

export default FactionsMap;