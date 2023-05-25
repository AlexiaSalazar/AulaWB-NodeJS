import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessorSchema } from './professor.model';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';

@Module({
  imports: [MongooseModule.forFeature( [ { name: 'Professor', schema: ProfessorSchema } ] )  ],
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}