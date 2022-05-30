import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';

import { CoursesService } from './courses/courses.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-manya:test123@cluster0.r7kxx.mongodb.net/timetableDB?retryWrites=true&w=majority',
    ),
    StudentsModule,
    CoursesModule,
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
