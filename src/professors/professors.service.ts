import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { ProfessorsRepository } from './professors.repository';

@Injectable()
export class ProfessorsService {
  constructor(public professorsRepo: ProfessorsRepository) {}

  getProfessors() {
    return this.professorsRepo.getProfessors();
  }

  getProfessorByID(id: string) {
    return this.professorsRepo.getProfessorByID(id);
  }

  async addProfessor(name: string, courses: mongoose.Types.ObjectId) {
    return this.professorsRepo.addProfessor(name, courses);
  }

  async updateProfessor(id: string, name: string, courses: [Course]) {
    return this.professorsRepo.updateProfessor(id, name, courses);
  }

  async deleteProfessor(id: string) {
    return this.professorsRepo.deleteProfessor(id);
  }
}
