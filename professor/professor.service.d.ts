import { Model } from 'mongoose';
import { Professor } from './professor.model';
export declare class ProfessorService {
    private readonly professorModel;
    constructor(professorModel: Model<Professor>);
    createProfessor(professor: Professor): Promise<string>;
    readAll(): Promise<{
        id: any;
        name: string;
        numeroProfessor: number;
        course: string;
    }[]>;
    getProfessorByNumeroProfessor(numeroProfessor: number): Promise<Professor>;
    deleteProfessor(numeroProfessor: number): Promise<void>;
    updateProfessor(professor: Professor): Promise<Professor>;
}
