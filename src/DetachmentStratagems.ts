import 'reflect-metadata';

import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';
import Stratagem from './Stratagem';

@jsonObject
class DetachmentStratagems {
    @jsonMember
    public name: string;

    @jsonArrayMember(Stratagem)
    public stratagems: Stratagem[];

    constructor(name: string, stratagems: Stratagem[]) {
        this.name = name;
        this.stratagems = stratagems;
    }
}

export default DetachmentStratagems;