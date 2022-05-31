import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  professor: { type: String, required: true },
  students: { type: Number, required: true },
});

export interface Course {
  id: string;
  name: string;
  professor: string;
  students: number;
}
