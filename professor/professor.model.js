"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorSchema = void 0;
const mongoose = require("mongoose");
exports.ProfessorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    numeroProfessor: { type: Number, required: true }
});
//# sourceMappingURL=professor.model.js.map