"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceSkillValueEnum = void 0;
exports.DiceSkillValueDeserializer = DiceSkillValueDeserializer;
var DiceSkillValueEnum;
(function (DiceSkillValueEnum) {
    DiceSkillValueEnum["Two"] = "Two";
    DiceSkillValueEnum["Three"] = "Three";
    DiceSkillValueEnum["Four"] = "Four";
    DiceSkillValueEnum["Five"] = "Five";
    DiceSkillValueEnum["Six"] = "Six";
})(DiceSkillValueEnum || (exports.DiceSkillValueEnum = DiceSkillValueEnum = {}));
class DiceSkillValue {
    constructor(value) {
        this.value = value;
    }
    static parse(key) {
        if (key == null) {
            return undefined;
        }
        return new this(DiceSkillValueEnum[key]);
    }
    static parseNumerical(value) {
        switch (value) {
            case 2:
                return _a.Two;
            case 3:
                return _a.Three;
            case 4:
                return _a.Four;
            case 5:
                return _a.Five;
            case 6:
                return _a.Six;
            default:
                return undefined;
        }
    }
    static parseDescription(value) {
        switch (value) {
            case '2+':
                return _a.Two;
            case '3+':
                return _a.Three;
            case '4+':
                return _a.Four;
            case '5+':
                return _a.Five;
            case '6+':
                return _a.Six;
            default:
                return undefined;
        }
    }
    get numericalValue() {
        switch (this.value) {
            case DiceSkillValueEnum.Two:
                return 2;
            case DiceSkillValueEnum.Three:
                return 3;
            case DiceSkillValueEnum.Four:
                return 4;
            case DiceSkillValueEnum.Five:
                return 5;
            case DiceSkillValueEnum.Six:
                return 6;
        }
    }
    get description() {
        switch (this.value) {
            case DiceSkillValueEnum.Two:
                return '2+';
            case DiceSkillValueEnum.Three:
                return '3+';
            case DiceSkillValueEnum.Four:
                return '4+';
            case DiceSkillValueEnum.Five:
                return '5+';
            case DiceSkillValueEnum.Six:
                return '6+';
        }
    }
    get successPercentage() {
        switch (this.value) {
            case DiceSkillValueEnum.Two:
                return 0.8333333;
            case DiceSkillValueEnum.Three:
                return 0.6666667;
            case DiceSkillValueEnum.Four:
                return 0.5;
            case DiceSkillValueEnum.Five:
                return 0.33333334;
            case DiceSkillValueEnum.Six:
                return 0.16666667;
        }
    }
    get failurePercentage() {
        switch (this.value) {
            case DiceSkillValueEnum.Two:
                return 0.16666667;
            case DiceSkillValueEnum.Three:
                return 0.33333334;
            case DiceSkillValueEnum.Four:
                return 0.5;
            case DiceSkillValueEnum.Five:
                return 0.6666667;
            case DiceSkillValueEnum.Six:
                return 0.8333333;
        }
    }
}
_a = DiceSkillValue;
DiceSkillValue.Two = new _a(DiceSkillValueEnum.Two);
DiceSkillValue.Three = new _a(DiceSkillValueEnum.Three);
DiceSkillValue.Four = new _a(DiceSkillValueEnum.Four);
DiceSkillValue.Five = new _a(DiceSkillValueEnum.Five);
DiceSkillValue.Six = new _a(DiceSkillValueEnum.Six);
DiceSkillValue.AllValues = [_a.Two, _a.Three, _a.Four, _a.Five, _a.Six];
function DiceSkillValueDeserializer(json, params) {
    return json == null ? json : DiceSkillValue.parse(json);
}
exports.default = DiceSkillValue;
