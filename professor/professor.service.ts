import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Professor } from './professor.model';

@Injectable()
export class ProfessorService {

    constructor(@InjectModel('Professor') private readonly professorModel: Model<Professor>) { }

    async createProfessor(professor: Professor) {
        const professorModel = new this.professorModel(
            {
                name: professor.name,
               numeroProfessor: professor.numeroProfessor,
                course: professor.course
            }
        )
        const result = await professorModel.save()
        return result.id as string;
    }

    async readAll() {
        const professor = await this.professorModel.find().exec()
        return professor.map( professor => ({
            id: professor.id,
            name: professor.name,
            numeroProfessor: professor.numeroProfessor,
            course: professor.course
        }) );
    }

    async getProfessorByNumeroProfessor(numeroProfessor: number): Promise<Professor> {
        const professor = await this.professorModel.findOne({numeroProfessor: numeroProfessor});
        if (!professor){
            throw new NotFoundException('Could not find the professor.');
        }
        return {
            id: professor.id,
            name: professor.name,
            numeroProfessor: professor.numeroProfessor,
            course: professor.course
        }
    }

    async deleteProfessor(numeroProfessor: number){
        const result = await this.professorModel.deleteOne({numeroProfessor: numeroProfessor}).exec();
        if (result.n === 0){
            throw new NotFoundException('Could not remove professor.')
        }
    }

    async updateProfessor(professor: Professor): Promise<Professor>{
        const updatedProfessor = await this.professorModel.findOne({numeroProfessor: professor.numeroProfessor});
        if (!updatedProfessor){
            throw new NotFoundException('Could not find professor.');
        }
        if (professor.name){
            updatedProfessor.name = professor.name;
        }
        if (professor.course){
            updatedProfessor.course = professor.course;
        }
        updatedProfessor.save();
        return {
            id: updatedProfessor.id,
            name: updatedProfessor.name,
            numeroProfessor: professor.numeroProfessor,
            course: updatedProfessor.course
        }
    }
}
