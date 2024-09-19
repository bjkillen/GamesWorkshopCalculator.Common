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
const ModelDatasheet_1 = __importDefault(require("./ModelDatasheet"));
const Wargear_1 = __importDefault(require("./Wargear"));
const Keyword_1 = __importDefault(require("./Keyword"));
let UnitDatasheet = class UnitDatasheet {
    constructor(id, name, factionId, modelDatasheets, wargear, keywords) {
        this.id = id;
        this.name = name;
        this.factionId = factionId;
        this.modelDatasheets = modelDatasheets;
        this.wargear = wargear;
        this.keywords = keywords;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], UnitDatasheet.prototype, "id", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], UnitDatasheet.prototype, "name", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", String)
], UnitDatasheet.prototype, "factionId", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(ModelDatasheet_1.default),
    __metadata("design:type", Array)
], UnitDatasheet.prototype, "modelDatasheets", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(Wargear_1.default),
    __metadata("design:type", Array)
], UnitDatasheet.prototype, "wargear", void 0);
__decorate([
    (0, typedjson_1.jsonArrayMember)(Keyword_1.default),
    __metadata("design:type", Array)
], UnitDatasheet.prototype, "keywords", void 0);
UnitDatasheet = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [String, String, String, Array, Array, Array])
], UnitDatasheet);
exports.default = UnitDatasheet;
