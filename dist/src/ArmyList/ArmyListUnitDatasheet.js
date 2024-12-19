"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedjson_1 = require("typedjson");
const UnitDatasheet_1 = __importDefault(require("../UnitDatasheet"));
const ArmyListModelDatasheet_1 = __importDefault(require("./ArmyListModelDatasheet"));
const ArmyListWargear_1 = __importDefault(require("./ArmyListWargear"));
let ArmyListUnitDatasheet = class ArmyListUnitDatasheet {
    constructor(guid, datasheet, points, modelDatasheets, chosenWargear) {
        this.guid = guid;
        this.datasheet = datasheet;
        this.points = points;
        this.modelDatasheets = modelDatasheets;
        this.chosenWargear = chosenWargear;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], ArmyListUnitDatasheet.prototype, "guid", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", UnitDatasheet_1.default)
], ArmyListUnitDatasheet.prototype, "datasheet", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], ArmyListUnitDatasheet.prototype, "points", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(ArmyListModelDatasheet_1.default),
    __metadata("design:type", Array)
], ArmyListUnitDatasheet.prototype, "modelDatasheets", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(ArmyListWargear_1.default),
    __metadata("design:type", Array)
], ArmyListUnitDatasheet.prototype, "chosenWargear", void 0);
ArmyListUnitDatasheet = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, UnitDatasheet_1.default, Number, Array, Array])
], ArmyListUnitDatasheet);
exports.default = ArmyListUnitDatasheet;
