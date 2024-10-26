import 'reflect-metadata';

import { jsonObject, jsonMember, jsonMapMember } from 'typedjson';
import DetachmentStratagems from './DetachmentStratagems';

@jsonObject
class FactionDetachments {
    @jsonMember
    public id: string;

    @jsonMember
    public name: string;

    @jsonMapMember(String, DetachmentStratagems)
    public detachments: Map<string, DetachmentStratagems>;

    constructor(id: string, name: string, detachments: Map<string, DetachmentStratagems>) {
        this.id = id;
        this.name = name;
        this.detachments = detachments;
    }
}

export default FactionDetachments;