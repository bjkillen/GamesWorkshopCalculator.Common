import 'reflect-metadata';

import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';
import Stratagem from './Stratagem';

@jsonObject
class FactionStratagems {
    @jsonMember
    public id: string;

    @jsonMember
    public name: string;

    @jsonArrayMember(Stratagem)
    public stratagems: Stratagem[];

    constructor(id: string, name: string, stratagems: Stratagem[]) {
        this.id = id;
        this.name = name;
        this.stratagems = stratagems;
    }
}

export default FactionStratagems;