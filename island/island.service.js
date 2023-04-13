"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandService = void 0;
const common_1 = require("@nestjs/common");
const island_1 = require("../constant/island");
let IslandService = class IslandService {
    constructor() {
        this.islands = island_1.islands;
    }
    getAllIslands() {
        return this.islands;
    }
    getIslandNamesByBehemothName(name) {
        return this.islands
            .filter((island) => {
            const hasBehemoth = island.behemoths.some((behemoth) => {
                return behemoth.name.toLowerCase().includes(name.toLowerCase());
            });
            if (hasBehemoth) {
                return island;
            }
        })
            .map((el) => el.name);
    }
    getIslandsByLevel(min, max) {
        if (Number.isNaN(min) && Number.isNaN(max)) {
            throw new common_1.BadRequestException("min and max are undefined");
        }
        if (min > max) {
            throw new common_1.BadRequestException("max lower than min");
        }
        else if (min < 1 || min > 24) {
            throw new common_1.BadRequestException("min out of range: 1 to 24");
        }
        else if (max < 1 || max > 24) {
            throw new common_1.BadRequestException("max out of range: 1 to 24");
        }
        return this.islands.filter((island) => {
            if (Number.isNaN(min)) {
                return island.level.max <= max;
            }
            else if (Number.isNaN(max)) {
                return island.level.min >= min;
            }
            return island.level.max <= max && island.level.min >= min;
        });
    }
};
IslandService = __decorate([
    (0, common_1.Injectable)({})
], IslandService);
exports.IslandService = IslandService;
//# sourceMappingURL=island.service.js.map