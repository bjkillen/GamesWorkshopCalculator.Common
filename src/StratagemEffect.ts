import "reflect-metadata";

import { jsonObject, jsonMember, jsonArrayMember } from "typedjson";
import DiceSkillValue from "./enums/DiceSkillValue";
import DiceRerollModifierValue from "./enums/DiceRerollModifierValue";
import StratagemQuestion from "./StratagemQuestion";
import StratagemType from "./enums/StratagemType";
import Keyword from "./Keyword";

@jsonObject
class StratagemEffect {
    @jsonMember
    public stratagemID: string;

    @jsonMember
    public factionID: string;

    @jsonMember
    public cpCost: number;

    @jsonArrayMember(Keyword)
    public datasheetRestrictions: Keyword[];

    @jsonMember
    public question: boolean;

    @jsonMember
    public type: StratagemType;

    @jsonMember
    public sustainedHits?: number;

    @jsonMember
    public criticalHits?: DiceSkillValue;

    @jsonMember
    public criticalWounds?: DiceSkillValue;

    @jsonMember
    public minusOneDamage?: boolean;

    @jsonMember
    public feelNoPain?: DiceSkillValue;

    @jsonMember
    public toWoundPlusOne?: boolean;

    @jsonMember
    public rerollHits?: DiceRerollModifierValue;

    @jsonMember
    public bonusAttacks?: number;

    @jsonMember
    public stealth?: boolean;

    @jsonMember
    public bonusAP?: number;

    @jsonMember
    public bonusStrength?: number;

    @jsonMember
    public setWeaponSkill?: DiceSkillValue;

    @jsonMember
    public toHitPlusOne?: boolean;

    @jsonMember
    public setInvulnerableSkill?: DiceSkillValue;

    @jsonMember
    public toWoundMinusOne?: boolean;

    @jsonMember
    public lethalHits?: boolean;

    @jsonMember
    public reducesAP: number;

    @jsonMember
    public devastatingWounds?: boolean;

    @jsonMember
    public rerollWounds?: DiceRerollModifierValue;

    @jsonMember
    public bonusDamage: number;

    @jsonMember
    public transhuman?: boolean;

    @jsonArrayMember(StratagemQuestion)
    public questions: StratagemQuestion[]

    constructor(
        stratagemID: string,
        factionID: string,
        cpCost: number,
        datasheetRestrictions: Keyword[],
        question: boolean,
        type: StratagemType,
        sustainedHits: number | undefined,
        criticalHits: DiceSkillValue | undefined,
        criticalWounds: DiceSkillValue | undefined,
        minusOneDamage: boolean | undefined,
        feelNoPain: DiceSkillValue | undefined,
        toWoundPlusOne: boolean,
        rerollHits: DiceRerollModifierValue | undefined,
        bonusAttacks: number | undefined,
        stealth: boolean | undefined,
        bonusAP: number | undefined,
        bonusStrength: number | undefined,
        setWeaponSkill: DiceSkillValue | undefined,
        toHitPlusOne: boolean | undefined,
        setInvulnerableSkill: DiceSkillValue | undefined,
        toWoundMinusOne: boolean | undefined,
        lethalHits: boolean | undefined,
        reducesAP: number,
        devastatingWounds: boolean | undefined,
        rerollWounds: DiceRerollModifierValue | undefined,
        bonusDamage: number,
        transhuman: boolean | undefined,
        questions: StratagemQuestion[],
    ) {
        this.stratagemID = stratagemID;
        this.factionID = factionID;
        this.cpCost = cpCost;
        this.datasheetRestrictions = datasheetRestrictions;
        this.question = question;
        this.type = type;
        this.sustainedHits = sustainedHits;
        this.criticalHits = criticalHits;
        this.criticalWounds = criticalWounds;
        this.minusOneDamage = minusOneDamage;
        this.feelNoPain = feelNoPain;
        this.toWoundPlusOne = toWoundPlusOne;
        this.rerollHits = rerollHits;
        this.bonusAttacks = bonusAttacks;
        this.stealth = stealth;
        this.bonusAP = bonusAP;
        this.bonusStrength = bonusStrength;
        this.setWeaponSkill = setWeaponSkill;
        this.toHitPlusOne = toHitPlusOne;
        this.setInvulnerableSkill = setInvulnerableSkill;
        this.toWoundMinusOne = toWoundMinusOne;
        this.lethalHits = lethalHits;
        this.reducesAP = reducesAP;
        this.devastatingWounds = devastatingWounds;
        this.rerollWounds = rerollWounds;
        this.bonusDamage = bonusDamage;
        this.transhuman = transhuman;
        this.questions = questions;
    }
}

export default StratagemEffect;
