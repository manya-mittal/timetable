import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Course } from 'src/courses/course.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] })
  courses: Course[]; // an array of Course ids
}

export const StudentSchema = SchemaFactory.createForClass(Student);
