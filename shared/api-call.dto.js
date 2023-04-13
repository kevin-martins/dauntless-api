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
exports.ApiCallDto = exports.EventProps = exports.GatherableProps = exports.BehemothProps = void 0;
const swagger_1 = require("@nestjs/swagger");
class BehemothProps {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BehemothProps.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], BehemothProps.prototype, "guaranteed", void 0);
exports.BehemothProps = BehemothProps;
class GatherableProps {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], GatherableProps.prototype, "name", void 0);
exports.GatherableProps = GatherableProps;
class EventProps {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], EventProps.prototype, "name", void 0);
exports.EventProps = EventProps;
class ApiCallDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ApiCallDto.prototype, "name", void 0);
exports.ApiCallDto = ApiCallDto;
//# sourceMappingURL=api-call.dto.js.map