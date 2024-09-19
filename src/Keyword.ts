import 'reflect-metadata';

import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
class Keyword {
    @jsonMember
    public datasheetId: string;

    @jsonMember
    public name: string;

    constructor(datasheetId: string, name: string) {
        this.datasheetId = datasheetId;
        this.name = name;
    }
}

export default Keyword;