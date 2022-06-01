import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessorSchema } from './professor.schema';
import { ProfessorsController } from './professors.controller';
import { ProfessorsService } from './professors.service';
import { ProfessorsRepository } from './professors.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Professor', schema: ProfessorSchema }]),
  ],
  controllers: [ProfessorsController],
  providers: [ProfessorsService, ProfessorsRepository],
})
export class ProfessorsModule {}
