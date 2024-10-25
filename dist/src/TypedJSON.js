"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedjson_1 = require("typedjson");
const DiceSkillValue_1 = __importDefault(require("./enums/DiceSkillValue"));
const WargearType_1 = __importDefault(require("./enums/WargearType"));
const DiceRerollModifierValue_1 = __importDefault(require("./enums/DiceRerollModifierValue"));
typedjson_1.TypedJSON.mapType(DiceSkillValue_1.default, {
    deserializer: json => json == null ? json : DiceSkillValue_1.default.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});
typedjson_1.TypedJSON.mapType(DiceRerollModifierValue_1.default, {
    deserializer: json => json == null ? json : DiceRerollModifierValue_1.default.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});
typedjson_1.TypedJSON.mapType(WargearType_1.default, {
    deserializer: json => json == null ? json : WargearType_1.default.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});
exports.default = typedjson_1.TypedJSON;
