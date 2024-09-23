import 'reflect-metadata';

import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
class Ability {
    @jsonMember
    public id: string;

    @jsonMember
    public name: string;

    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
    }
}

export default Ability;