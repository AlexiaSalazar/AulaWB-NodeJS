import { Model } from 'mongoose';
import { Student } from './student.model';
export declare class StudentsService {
    private readonly studentModel;
    constructor(studentModel: Model<Student>);
    createStudent(student: Student): Promise<string>;
    readAll(): Promise<{
        id: any;
        name: string;
        tia: number;
        course: string;
    }[]>;
    getStudentByTIA(tia: number): Promise<Student>;
    deleteStudent(tia: number): Promise<void>;
    updateStudent(student: Student): Promise<Student>;
}
