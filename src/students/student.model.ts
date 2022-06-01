import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  courses: [mongoose.Schema.Types.ObjectId],
});

export interface Student {
  id: string;
  name: string;
  age: number;
  courses: [mongoose.Schema.Types.ObjectId];
}
