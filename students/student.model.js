"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tia: { type: Number, required: true },
    course: { type: String, required: true }
});
//# sourceMappingURL=student.model.js.map