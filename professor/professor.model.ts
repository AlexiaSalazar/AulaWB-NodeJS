import * as mongoose from 'mongoose';

export const ProfessorSchema = new mongoose.Schema({
    name: { type: String, required: true},
    course: { type: String, required: true},
    numeroProfessor: { type: Number, required: true}
});

export interface Professor{
    id: string,
    name: string,
    course: string,
    numeroProfessor: number
}
