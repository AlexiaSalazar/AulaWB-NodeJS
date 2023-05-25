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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StudentsService = class StudentsService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async createStudent(student) {
        const studentModel = new this.studentModel({
            name: student.name,
            tia: student.tia,
            course: student.course
        });
        const result = await studentModel.save();
        return result.id;
    }
    async readAll() {
        const students = await this.studentModel.find().exec();
        return students.map(student => ({
            id: student.id,
            name: student.name,
            tia: student.tia,
            course: student.course
        }));
    }
    async getStudentByTIA(tia) {
        const student = await this.studentModel.findOne({ tia: tia });
        if (!student) {
            throw new common_1.NotFoundException('Could not find the student.');
        }
        return {
            id: student.id,
            name: student.name,
            tia: student.tia,
            course: student.course
        };
    }
    async deleteStudent(tia) {
        const result = await this.studentModel.deleteOne({ tia: tia }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not remove student.');
        }
    }
    async updateStudent(student) {
        const updatedStudent = await this.studentModel.findOne({ tia: student.tia });
        if (!updatedStudent) {
            throw new common_1.NotFoundException('Could not find student.');
        }
        if (student.name) {
            updatedStudent.name = student.name;
        }
        if (student.course) {
            updatedStudent.course = student.course;
        }
        updatedStudent.save();
        return {
            id: updatedStudent.id,
            name: updatedStudent.name,
            tia: updatedStudent.tia,
            course: updatedStudent.course
        };
    }
};
StudentsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map