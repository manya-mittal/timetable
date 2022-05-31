import { Injectable } from '@nestjs/common';
import { CoursesRepository } from './courses.repository';
@Injectable()
export class CoursesService {
  constructor(public coursesRepo: CoursesRepository) {}

  getCourses() {
    return this.coursesRepo.getCourses();
  }

  getCourseByID(studentId: string) {
    return this.coursesRepo.getCourseByID(studentId);
  }

  async addCourse(name: string, prof: string, students: number) {
    return this.coursesRepo.addCourse(name, prof, students);
  }

  async updateCourse(id: string, name: string, prof: string, students: number) {
    return this.coursesRepo.updateCourse(id, name, prof, students);
  }

  async deleteCourse(id: string) {
    return this.coursesRepo.deleteCourse(id);
  }
}
