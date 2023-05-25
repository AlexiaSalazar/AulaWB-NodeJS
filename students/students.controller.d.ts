import { Student } from './student.model';
import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    createStudent(student: Student): Promise<any>;
    readAll(): Promise<any>;
    getStudent(tia: number): Promise<Student>;
    updateStudent(student: Student): Promise<any>;
    deleteStudent(tia: number): Promise<any>;
}
