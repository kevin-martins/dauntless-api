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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const island_service_1 = require("./island.service");
const swagger_1 = require("@nestjs/swagger");
const gatherable_dto_1 = require("../gatherable/dto/gatherable.dto");
let IslandController = class IslandController {
    constructor(islandService) {
        this.islandService = islandService;
    }
    getAllIslands() {
        return this.islandService.getAllIslands();
    }
    getIslandsByBehemothName(name) {
        return this.islandService.getIslandsByBehemothName(name);
    }
    getIslandsByLevel(min = "1", max = "24") {
        return this.islandService.getIslandsByLevel(parseInt(min), parseInt(max));
    }
    getIslandNamesByGatherable(name, rarity) {
        return this.islandService.getIslandNamesByGatherable(name, rarity);
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getAllIslands", null);
__decorate([
    (0, decorators_1.Get)("behemoth"),
    (0, swagger_1.ApiQuery)({ name: "name", type: String, required: true }),
    __param(0, (0, decorators_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandsByBehemothName", null);
__decorate([
    (0, decorators_1.Get)("level"),
    (0, swagger_1.ApiQuery)({ name: "min", type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: "max", type: String, required: false }),
    __param(0, (0, decorators_1.Query)("min")),
    __param(1, (0, decorators_1.Query)("max")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandsByLevel", null);
__decorate([
    (0, decorators_1.Get)("gatherable"),
    (0, swagger_1.ApiQuery)({ name: "name", type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: "type", enum: gatherable_dto_1.GatherableType, required: false }),
    (0, swagger_1.ApiQuery)({ name: "rarity", enum: gatherable_dto_1.GatherableRarity, required: false }),
    __param(0, (0, decorators_1.Query)("name")),
    __param(1, (0, decorators_1.Query)("rarity")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandNamesByGatherable", null);
IslandController = __decorate([
    (0, common_1.Controller)("island"),
    __metadata("design:paramtypes", [island_service_1.IslandService])
], IslandController);
exports.IslandController = IslandController;
//# sourceMappingURL=island.controller.js.map