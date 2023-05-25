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
exports.ProfessorController = void 0;
const common_1 = require("@nestjs/common");
const professor_service_1 = require("./professor.service");
let ProfessorController = class ProfessorController {
    constructor(professorService) {
        this.professorService = professorService;
    }
    async createProfessor(professor) {
        const result = await this.professorService.createProfessor(professor);
        return { id: result };
    }
    readAll() {
        return this.professorService.readAll();
    }
    getProfessor(numeroProfessor) {
        return this.professorService.getProfessorByNumeroProfessor(numeroProfessor);
    }
    async updateProfessor(professor) {
        return await this.professorService.updateProfessor(professor);
    }
    async deleteProfessor(numeroProfessor) {
        await this.professorService.deleteProfessor(numeroProfessor);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "createProfessor", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "readAll", null);
__decorate([
    common_1.Get(':numeroProfessor'),
    __param(0, common_1.Param('numeroProfessor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfessorController.prototype, "getProfessor", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "updateProfessor", null);
__decorate([
    common_1.Delete(':numeroProfessor'),
    __param(0, common_1.Param('numeroProfessor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "deleteProfessor", null);
ProfessorController = __decorate([
    common_1.Controller('professor'),
    __metadata("design:paramtypes", [professor_service_1.ProfessorService])
], ProfessorController);
exports.ProfessorController = ProfessorController;
//# sourceMappingURL=professor.controller.js.map