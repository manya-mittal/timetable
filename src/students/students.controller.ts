import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(public studentService: StudentsService) {}

  @Get()
  async getAllStudents() {
    const students = await this.studentService.getStudents();
    return students;
  }
  @Get(':id')
  async getStudent(@Param('id') id: string) {
    const student = await this.studentService.getStudentByID(id);
    return student;
  }

  @Post()
  addStudent(
    @Body('name') studentName: string,
    @Body('age') studentAge: number,
    @Body('courses') courses: mongoose.Types.ObjectId,
  ) {
    this.studentService.addStudent(studentName, studentAge, courses);
    return 'uploaded';
  }

  @Patch(':id')
  async updateStudent(
    @Param('id') studentId: string,
    @Body('name') studentName: string,
    @Body('age') studentAge: number,
  ) {
    return await this.studentService.updateStudent(
      studentId,
      studentName,
      studentAge,
    );
  }

  @Delete(':id')
  async deleteStudent(@Param('id') studentId: string) {
    await this.studentService.deleteStudent(studentId);
    return null;
  }
}
