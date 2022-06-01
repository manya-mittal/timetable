import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { Professor } from './professor.schema';

@Injectable()
export class ProfessorsRepository {
  constructor(
    @InjectModel('Professor') private professorModel: Model<Professor>,
  ) {}

  async getProfessors() {
    const professors = await this.professorModel.find();
    return professors.map((prod) => ({
      id: prod.id,
      name: prod.name,
      courses: prod.courses,
    }));
  }

  async getProfessorByID(professorId: string) {
    let professor;
    try {
      professor = await this.professorModel.findById(professorId).exec();
    } catch (error) {
      throw new NotFoundException('Could not find professor.');
    }
    if (!professor) {
      throw new NotFoundException('Could not find professor.');
    }
    return {
      id: professor.id,
      name: professor.name,
      courses: professor.courses,
    };
  }

  async addProfessor(name: string, courses: mongoose.Types.ObjectId) {
    const newProfessor = new this.professorModel({ name, courses });
    console.log(newProfessor);

    const resultID = await newProfessor.save();
    console.log(resultID);

    return resultID;
  }

  async updateProfessor(id: string, name: string, courses: [Course]) {
    const updatedStudent = await this.professorModel
      .updateOne({ _id: id }, { name, courses })
      .exec();
    return updatedStudent;
  }

  async deleteProfessor(id: string) {
    await this.professorModel.deleteOne({ _id: id }).exec();
    return 'success';
  }
}
