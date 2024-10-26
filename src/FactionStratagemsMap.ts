import 'reflect-metadata';

import { jsonObject, jsonMapMember } from 'typedjson';
import FactionDetachments from './FactionDetachments';

@jsonObject
class FactionStratagemsMap {
    @jsonMapMember(String, FactionDetachments)
    public map: Map<string, FactionDetachments>;

    constructor(map: Map<string, FactionDetachments>) {
        this.map = map;
    }
}

export default FactionStratagemsMap;