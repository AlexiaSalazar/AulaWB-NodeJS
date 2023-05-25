import { Professor } from './professor.model';
import { ProfessorService } from './professor.service';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    createProfessor(professor: Professor): Promise<any>;
    readAll(): Promise<any>;
    getProfessor(numeroProfessor: number): Promise<Professor>;
    updateProfessor(professor: Professor): Promise<any>;
    deleteProfessor(numeroProfessor: number): Promise<any>;
}
