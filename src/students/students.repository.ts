import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Student } from './student.model';

@Injectable()
export class StudentsRepository {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async getStudents() {
    const students = await this.studentModel.find();
    return students.map((prod) => ({
      id: prod.id,
      name: prod.name,
      age: prod.age,
      courses: prod.courses,
    }));
  }

  async getStudentByID(studentId: string) {
    let student;
    try {
      student = await this.studentModel.findById(studentId).exec();
    } catch (error) {
      throw new NotFoundException('Could not find student.');
    }
    if (!student) {
      throw new NotFoundException('Could not find student.');
    }
    return { id: student.id, name: student.name, age: student.age };
  }

  async addStudent(
    name: string,
    age: number,
    courses: mongoose.Types.ObjectId,
  ) {
    const newStudent = new this.studentModel({ name, age, courses });
    const resultID = await newStudent.save(); // saves to database
    console.log(resultID);
    return resultID;
  }

  async updateStudent(id: string, studentName: string, studentAge: number) {
    const updatedStudent = await this.studentModel
      .updateOne({ _id: id }, { name: studentName, age: studentAge })
      .exec();
    return updatedStudent;
  }

  async deleteStudent(id: string) {
    await this.studentModel.deleteOne({ _id: id }).exec();
    return 'success';
  }
}
