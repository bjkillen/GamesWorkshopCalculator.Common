"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wargear = exports.ModelDatasheet = exports.UnitDatasheet = exports.DiceSkillValue = exports.Faction = exports.FactionsMap = exports.TypedJSON = void 0;
require("reflect-metadata");
const TypedJSON_1 = __importDefault(require("./src/TypedJSON"));
exports.TypedJSON = TypedJSON_1.default;
const FactionsMap_1 = __importDefault(require("./src/FactionsMap"));
exports.FactionsMap = FactionsMap_1.default;
const Faction_1 = __importDefault(require("./src/Faction"));
exports.Faction = Faction_1.default;
const DiceSkillValue_1 = __importDefault(require("./src/enums/DiceSkillValue"));
exports.DiceSkillValue = DiceSkillValue_1.default;
const UnitDatasheet_1 = __importDefault(require("./src/UnitDatasheet"));
exports.UnitDatasheet = UnitDatasheet_1.default;
const ModelDatasheet_1 = __importDefault(require("./src/ModelDatasheet"));
exports.ModelDatasheet = ModelDatasheet_1.default;
const Wargear_1 = __importDefault(require("./src/Wargear"));
exports.Wargear = Wargear_1.default;
