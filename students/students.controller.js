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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    async createStudent(student) {
        var result = await this.studentsService.createStudent(student);
        return { id: result };
    }
    readAll() {
        return this.studentsService.readAll();
    }
    getStudent(tia) {
        return this.studentsService.getStudentByTIA(tia);
    }
    async updateStudent(student) {
        return await this.studentsService.updateStudent(student);
    }
    async deleteStudent(tia) {
        await this.studentsService.deleteStudent(tia);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "createStudent", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "readAll", null);
__decorate([
    common_1.Get(':tia'),
    __param(0, common_1.Param('tia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getStudent", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateStudent", null);
__decorate([
    common_1.Delete(':tia'),
    __param(0, common_1.Param('tia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteStudent", null);
StudentsController = __decorate([
    common_1.Controller('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
exports.StudentsController = StudentsController;
//# sourceMappingURL=students.controller.js.map