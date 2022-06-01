import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Course } from 'src/courses/course.schema';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] })
  courses: Course[];
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
