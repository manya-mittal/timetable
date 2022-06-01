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
import { Course } from 'src/courses/course.schema';
import { ProfessorsService } from './professors.service';

@Controller('professors')
export class ProfessorsController {
  constructor(public professorsService: ProfessorsService) {}

  @Get()
  async getAllProfessors() {
    const professors = await this.professorsService.getProfessors();
    return professors;
  }
  @Get(':id')
  async getProfessor(@Param('id') id: string) {
    const professor = await this.professorsService.getProfessorByID(id);
    return professor;
  }

  @Post()
  addProfessor(
    @Body('name') name: string,
    @Body('courses') courses: mongoose.Types.ObjectId,
  ) {
    console.log(name + courses);

    this.professorsService.addProfessor(name, courses);
    return 'uploaded';
  }

  @Patch(':id')
  async updateProfessor(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('courses') courses: [Course],
  ) {
    return await this.professorsService.updateProfessor(id, name, courses);
  }

  @Delete(':id')
  async deleteProfessor(@Param('id') id: string) {
    await this.professorsService.deleteProfessor(id);
    return 'deleted';
  }
}
