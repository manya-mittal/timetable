import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.schema';

@Injectable()
export class CoursesRepository {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {}

  async getCourses() {
    const courses = await this.courseModel.find();
    return courses.map((prod) => ({
      id: prod.id,
      name: prod.name,
      professor: prod.professor,
      students: prod.students,
    }));
  }

  async getCourseByID(courseId: string) {
    let course;
    try {
      course = await this.courseModel.findById(courseId).exec();
    } catch (error) {
      throw new NotFoundException('Could not find course.');
    }
    if (!course) {
      throw new NotFoundException('Could not find course.');
    }
    return {
      id: course.id,
      name: course.name,
      professor: course.professor,
      students: course.students,
    };
  }

  async addCourse(name: string, professor: string, students: number) {
    const newcourse = new this.courseModel({ name, professor, students });
    const resultID = await newcourse.save();
    console.log(resultID);
    return 'saved to database successfully';
  }

  async updateCourse(
    id: string,
    courseName: string,
    courseProf: string,
    courseStudents: number,
  ) {
    const updatedcourse = await this.courseModel
      .updateOne(
        { _id: id },
        { name: courseName, professor: courseProf, students: courseStudents },
      )
      .exec();
    return updatedcourse;
  }

  async deleteCourse(id: string) {
    await this.courseModel.deleteOne({ _id: id }).exec();
    return 'success';
  }
}
