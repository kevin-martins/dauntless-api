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
exports.CraftController = void 0;
const common_1 = require("@nestjs/common");
const craft_service_1 = require("./craft.service");
const decorators_1 = require("@nestjs/common/decorators");
let CraftController = class CraftController {
    constructor(craftService) {
        this.craftService = craftService;
    }
    getAllCrafts() {
        return this.craftService.getAllCrafts();
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CraftController.prototype, "getAllCrafts", null);
CraftController = __decorate([
    (0, common_1.Controller)("craft"),
    __metadata("design:paramtypes", [craft_service_1.CraftService])
], CraftController);
exports.CraftController = CraftController;
//# sourceMappingURL=craft.controller.js.map