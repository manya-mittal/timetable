import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(public courseService: CoursesService) {}

  @Get()
  async getAllCourses() {
    const courses = await this.courseService.getCourses();
    return courses;
  }

  @Get(':id')
  async getCourse(@Param('id') id: string) {
    const student = await this.courseService.getCourseByID(id);
    return student;
  }

  @Post()
  addCourse(
    @Body('name') name: string,
    @Body('professor') prof: string,
    @Body('students') students: number,
  ) {
    this.courseService.addCourse(name, prof, students);
    return 'uploaded';
  }

  @Patch(':id')
  async updateCourse(
    @Param('id') courseId: string,
    @Body('name') name: string,
    @Body('professor') prof: string,
    @Body('students') students: number,
  ) {
    return await this.courseService.updateCourse(
      courseId,
      name,
      prof,
      students,
    );
  }

  @Delete(':id')
  async deleteCourse(@Param('id') courseId: string) {
    await this.courseService.deleteCourse(courseId);
    return null;
  }
}
