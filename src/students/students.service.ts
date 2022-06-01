import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { StudentsRepository } from './students.repository';
@Injectable()
export class StudentsService {
  constructor(public studentsRepo: StudentsRepository) {}

  getStudents() {
    return this.studentsRepo.getStudents();
  }

  getStudentByID(studentId: string) {
    return this.studentsRepo.getStudentByID(studentId);
  }

  async addStudent(
    name: string,
    age: number,
    courses: mongoose.Types.ObjectId,
  ) {
    return this.studentsRepo.addStudent(name, age, courses);
  }

  async updateStudent(
    id: string,
    studentName: string,
    studentAge: number,
    courses: [Course],
  ) {
    return this.studentsRepo.updateStudent(
      id,
      studentName,
      studentAge,
      courses,
    );
  }

  async deleteStudent(id: string) {
    return this.studentsRepo.deleteStudent(id);
  }
}
