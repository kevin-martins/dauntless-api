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
exports.IslandDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const api_call_dto_1 = require("../../shared/api-call.dto");
class IslandDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    __metadata("design:type", String)
], IslandDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    __metadata("design:type", String)
], IslandDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: {
            min: Number,
            max: Number,
        },
    }),
    __metadata("design:type", Object)
], IslandDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [api_call_dto_1.BehemothProps],
    }),
    __metadata("design:type", Array)
], IslandDto.prototype, "behemoths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [
            {
                name: String,
                type: String,
                rarity: String,
            },
        ],
    }),
    __metadata("design:type", Array)
], IslandDto.prototype, "gatherables", void 0);
exports.IslandDto = IslandDto;
//# sourceMappingURL=island.dto.js.map