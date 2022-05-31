import { Injectable } from '@nestjs/common';
import { StudentsRepository } from './students.repository';
@Injectable()
export class StudentsService {
  constructor(public messagesRepo: StudentsRepository) {}

  getStudents() {
    return this.messagesRepo.getStudents();
  }

  getStudentByID(studentId: string) {
    return this.messagesRepo.getStudentByID(studentId);
  }

  async addStudent(name: string, age: number) {
    return this.messagesRepo.addStudent(name, age);
  }

  async updateStudent(id: string, studentName: string, studentAge: number) {
    return this.messagesRepo.updateStudent(id, studentName, studentAge);
  }

  async deleteStudent(id: string) {
    return this.messagesRepo.deleteStudent(id);
  }
}
