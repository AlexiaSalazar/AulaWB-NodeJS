import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<mongoose.Document<any, any, any>, any, any>, undefined, {}>;
export interface Student {
    id: string;
    name: string;
    tia: number;
    course: string;
}
