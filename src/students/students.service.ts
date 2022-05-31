import { Injectable } from '@nestjs/common';
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

  async addStudent(name: string, age: number) {
    return this.studentsRepo.addStudent(name, age);
  }

  async updateStudent(id: string, studentName: string, studentAge: number) {
    return this.studentsRepo.updateStudent(id, studentName, studentAge);
  }

  async deleteStudent(id: string) {
    return this.studentsRepo.deleteStudent(id);
  }
}
