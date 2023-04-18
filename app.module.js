"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const craft_module_1 = require("./craft/craft.module");
const island_module_1 = require("./island/island.module");
const gatherable_module_1 = require("./gatherable/gatherable.module");
const island_service_1 = require("./island/island.service");
const gatherable_service_1 = require("./gatherable/gatherable.service");
const island_controller_1 = require("./island/island.controller");
const gatherable_controller_1 = require("./gatherable/gatherable.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [island_module_1.IslandModule, gatherable_module_1.GatherableModule, craft_module_1.CraftModule],
        controllers: [island_controller_1.IslandController, gatherable_controller_1.GatherableController],
        providers: [island_service_1.IslandService, gatherable_service_1.GatherableService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map