"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceRerollModifierValueEnum = void 0;
var DiceRerollModifierValueEnum;
(function (DiceRerollModifierValueEnum) {
    DiceRerollModifierValueEnum["None"] = "None";
    DiceRerollModifierValueEnum["Ones"] = "Ones";
    DiceRerollModifierValueEnum["All"] = "All";
})(DiceRerollModifierValueEnum || (exports.DiceRerollModifierValueEnum = DiceRerollModifierValueEnum = {}));
class DiceRerollModifierValue {
    constructor(value) {
        this.value = value;
    }
    static parse(key) {
        if (key == null) {
            return new this(DiceRerollModifierValueEnum.None);
        }
        return new this(DiceRerollModifierValueEnum[key]);
    }
    get description() {
        switch (this.value) {
            case DiceRerollModifierValueEnum.None:
                return 'No';
            case DiceRerollModifierValueEnum.Ones:
                return '1s';
            case DiceRerollModifierValueEnum.All:
                return 'All';
            default:
                return 'Unknown';
        }
    }
}
_a = DiceRerollModifierValue;
DiceRerollModifierValue.None = new _a(DiceRerollModifierValueEnum.None);
DiceRerollModifierValue.Ones = new _a(DiceRerollModifierValueEnum.Ones);
DiceRerollModifierValue.All = new _a(DiceRerollModifierValueEnum.All);
DiceRerollModifierValue.AllValues = [_a.None, _a.Ones, _a.All];
exports.default = DiceRerollModifierValue;
