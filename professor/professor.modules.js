"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const professor_model_1 = require("./professor.model");
const professor_controller_1 = require("./professor.controller");
const professor_service_1 = require("./professor.service");
let ProfessorModule = class ProfessorModule {
};
ProfessorModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Professor', schema: professor_model_1.ProfessorSchema }])],
        controllers: [professor_controller_1.ProfessorController],
        providers: [professor_service_1.ProfessorService]
    })
], ProfessorModule);
exports.ProfessorModule = ProfessorModule;
//# sourceMappingURL=professor.modules.js.map