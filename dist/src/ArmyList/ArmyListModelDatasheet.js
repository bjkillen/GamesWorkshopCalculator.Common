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
const ModelDatasheet_1 = __importDefault(require("../ModelDatasheet"));
const typedjson_1 = require("typedjson");
let ArmyListModelDatasheet = class ArmyListModelDatasheet {
    constructor(modelDatasheet, count) {
        this.modelDatasheet = modelDatasheet;
        this.count = count;
    }
};
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", ModelDatasheet_1.default)
], ArmyListModelDatasheet.prototype, "modelDatasheet", void 0);
__decorate([
    typedjson_1.jsonMember,
    __metadata("design:type", Number)
], ArmyListModelDatasheet.prototype, "count", void 0);
ArmyListModelDatasheet = __decorate([
    typedjson_1.jsonObject,
    __metadata("design:paramtypes", [ModelDatasheet_1.default, Number])
], ArmyListModelDatasheet);
exports.default = ArmyListModelDatasheet;
