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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatherableDto = exports.GatherableRarity = exports.GatherableType = void 0;
const swagger_1 = require("@nestjs/swagger");
var GatherableType;
(function (GatherableType) {
    GatherableType[GatherableType["Flower"] = 0] = "Flower";
    GatherableType[GatherableType["Ore"] = 1] = "Ore";
})(GatherableType = exports.GatherableType || (exports.GatherableType = {}));
var GatherableRarity;
(function (GatherableRarity) {
    GatherableRarity[GatherableRarity["Common"] = 0] = "Common";
    GatherableRarity[GatherableRarity["Uncommon"] = 1] = "Uncommon";
    GatherableRarity[GatherableRarity["Rare"] = 2] = "Rare";
})(GatherableRarity = exports.GatherableRarity || (exports.GatherableRarity = {}));
class GatherableDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    __metadata("design:type", String)
], GatherableDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ["Flower", "Ore"],
    }),
    __metadata("design:type", Number)
], GatherableDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ["Common", "Uncommon", "Rare"],
    }),
    __metadata("design:type", Number)
], GatherableDto.prototype, "rarity", void 0);
exports.GatherableDto = GatherableDto;
//# sourceMappingURL=gatherable.dto.js.map