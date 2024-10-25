import "reflect-metadata";

import { jsonObject, jsonMember } from "typedjson";
import StratagemEffect from "./StratagemEffect";

@jsonObject
class Stratagem {
    @jsonMember
    public id: string;

    @jsonMember
    public factionID: string;

    @jsonMember
    public name: string;

    @jsonMember
    public turn: string;

    @jsonMember
    public phase: string;

    @jsonMember
    public detachment: string;

    @jsonMember
    public description: string;

    @jsonMember
    public stratagemEffect?: StratagemEffect;

    constructor(
        id: string,
        factionID: string,
        name: string,
        turn: string,
        phase: string,
        detachment: string,
        description: string,
        effect: StratagemEffect | undefined
    ) {
        this.id = id;
        this.factionID = factionID;
        this.name = name;
        this.turn = turn;
        this.phase = phase;
        this.detachment = detachment;
        this.description = description;
        this.stratagemEffect = effect;
    }
}

export default Stratagem;
