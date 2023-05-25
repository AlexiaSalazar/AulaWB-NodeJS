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
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProfessorService = class ProfessorService {
    constructor(professorModel) {
        this.professorModel = professorModel;
    }
    async createProfessor(professor) {
        const professorModel = new this.professorModel({
            name: professor.name,
            numeroProfessor: professor.numeroProfessor,
            course: professor.course
        });
        const result = await professorModel.save();
        return result.id;
    }
    async readAll() {
        const professor = await this.professorModel.find().exec();
        return professor.map(professor => ({
            id: professor.id,
            name: professor.name,
            numeroProfessor: professor.numeroProfessor,
            course: professor.course
        }));
    }
    async getProfessorByNumeroProfessor(numeroProfessor) {
        const professor = await this.professorModel.findOne({ numeroProfessor: numeroProfessor });
        if (!professor) {
            throw new common_1.NotFoundException('Could not find the professor.');
        }
        return {
            id: professor.id,
            name: professor.name,
            numeroProfessor: professor.numeroProfessor,
            course: professor.course
        };
    }
    async deleteProfessor(numeroProfessor) {
        const result = await this.professorModel.deleteOne({ numeroProfessor: numeroProfessor }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not remove professor.');
        }
    }
    async updateProfessor(professor) {
        const updatedProfessor = await this.professorModel.findOne({ numeroProfessor: professor.numeroProfessor });
        if (!updatedProfessor) {
            throw new common_1.NotFoundException('Could not find professor.');
        }
        if (professor.name) {
            updatedProfessor.name = professor.name;
        }
        if (professor.course) {
            updatedProfessor.course = professor.course;
        }
        updatedProfessor.save();
        return {
            id: updatedProfessor.id,
            name: updatedProfessor.name,
            numeroProfessor: professor.numeroProfessor,
            course: updatedProfessor.course
        };
    }
};
ProfessorService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Professor')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfessorService);
exports.ProfessorService = ProfessorService;
//# sourceMappingURL=professor.service.js.map