import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { ProfessorsModule } from './professors/professors.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-manya:test123@cluster0.r7kxx.mongodb.net/timetableDB?retryWrites=true&w=majority',
    ),
    StudentsModule,
    CoursesModule,
    ProfessorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
