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
let IslandController = class IslandController {
    constructor(islandService) {
        this.islandService = islandService;
    }
    getAllIslands() {
        return this.islandService.getAllIslands();
    }
    getIslandNamesByBehemothName(name) {
        return this.islandService.getIslandNamesByBehemothName(name);
    }
    getIslandsByLevel(min, max) {
        return this.islandService.getIslandsByLevel(parseInt(min), parseInt(max));
    }
    getIslandNamesByGatherable(name, type, rarity) {
        return { name, type, rarity };
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
    __param(0, (0, decorators_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandNamesByBehemothName", null);
__decorate([
    (0, decorators_1.Get)("level"),
    __param(0, (0, decorators_1.Query)("min")),
    __param(1, (0, decorators_1.Query)("max")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandsByLevel", null);
__decorate([
    (0, decorators_1.Get)("gatherable"),
    __param(0, (0, decorators_1.Query)("name")),
    __param(1, (0, decorators_1.Query)("type")),
    __param(2, (0, decorators_1.Query)("rarity")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], IslandController.prototype, "getIslandNamesByGatherable", null);
IslandController = __decorate([
    (0, common_1.Controller)("island"),
    __metadata("design:paramtypes", [island_service_1.IslandService])
], IslandController);
exports.IslandController = IslandController;
//# sourceMappingURL=island.controller.js.map