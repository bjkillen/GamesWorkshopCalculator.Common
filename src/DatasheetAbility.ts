import 'reflect-metadata';

import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
class DatasheetAbility {
    @jsonMember
    public datasheetId: string;

    @jsonMember
    public abilityId: string;

    @jsonMember
    public name: string;

    @jsonMember
    public parameter: string;

    constructor(
        datasheetId: string,
        abilityId: string,
        name: string,
        parameter: string
    ) {
        this.datasheetId = datasheetId;
        this.abilityId = abilityId;
        this.name = name;
        this.parameter = parameter;
    }
}

export default DatasheetAbility;