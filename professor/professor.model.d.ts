import * as mongoose from 'mongoose';
export declare const ProfessorSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<mongoose.Document<any, any, any>, any, any>, undefined, {}>;
export interface Professor {
    id: string;
    name: string;
    course: string;
    numeroProfessor: number;
}
