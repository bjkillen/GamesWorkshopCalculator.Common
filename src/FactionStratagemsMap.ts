import 'reflect-metadata';

import { jsonObject, jsonMapMember } from 'typedjson';
import FactionStratagems from './FactionStratagems';

@jsonObject
class FactionStratagemsMap {
    @jsonMapMember(String, FactionStratagems)
    public map: Map<string, FactionStratagems>;

    constructor(map: Map<string, FactionStratagems>) {
        this.map = map;
    }
}

export default FactionStratagemsMap;