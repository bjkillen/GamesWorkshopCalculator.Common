"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StratagemTypeEnum = void 0;
var StratagemTypeEnum;
(function (StratagemTypeEnum) {
    StratagemTypeEnum["Attacker"] = "Attacker";
    StratagemTypeEnum["Defender"] = "Defender";
    StratagemTypeEnum["Both"] = "Both";
})(StratagemTypeEnum || (exports.StratagemTypeEnum = StratagemTypeEnum = {}));
class StratagemType {
    constructor(value) {
        this.value = value;
    }
    static parse(key) {
        if (key == null) {
            return new this(StratagemTypeEnum.Both);
        }
        return new this(StratagemTypeEnum[key]);
    }
    static parseDescriptionLower(value) {
        switch (value.toLocaleLowerCase()) {
            case StratagemTypeEnum.Attacker.toLocaleLowerCase():
                return _a.Attacker;
            case StratagemTypeEnum.Defender.toLocaleLowerCase():
                return _a.Defender;
            default:
                return _a.Both;
        }
    }
}
_a = StratagemType;
StratagemType.Attacker = new _a(StratagemTypeEnum.Attacker);
StratagemType.Defender = new _a(StratagemTypeEnum.Defender);
StratagemType.Both = new _a(StratagemTypeEnum.Both);
StratagemType.AllValues = [_a.Attacker, _a.Defender, _a.Both];
exports.default = StratagemType;
