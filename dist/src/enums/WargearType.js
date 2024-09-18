"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WargearTypeEnum = void 0;
var WargearTypeEnum;
(function (WargearTypeEnum) {
    WargearTypeEnum["Ranged"] = "Ranged";
    WargearTypeEnum["Melee"] = "Melee";
    WargearTypeEnum["Other"] = "Other";
})(WargearTypeEnum || (exports.WargearTypeEnum = WargearTypeEnum = {}));
class WargearType {
    constructor(value) {
        this.value = value;
    }
    static parse(key) {
        if (key == null) {
            return new this(WargearTypeEnum.Other);
        }
        return new this(WargearTypeEnum[key]);
    }
}
_a = WargearType;
WargearType.Ranged = new _a(WargearTypeEnum.Ranged);
WargearType.Melee = new _a(WargearTypeEnum.Melee);
WargearType.Other = new _a(WargearTypeEnum.Other);
WargearType.AllValues = [_a.Ranged, _a.Melee, _a.Other];
exports.default = WargearType;
