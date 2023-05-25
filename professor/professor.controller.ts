import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Professor } from './professor.model';
import { ProfessorService } from './professor.service';


@Controller('professor')
export class ProfessorController {
    constructor(private readonly professorService: ProfessorService){}

    // CREATE
    @Post()
    async createProfessor( @Body() professor: Professor): Promise<any>{
        const result = await this.professorService.createProfessor(professor);
        return {id: result}
    }

    // READ
    @Get()
    readAll(): Promise<any> {
        return this.professorService.readAll()
    }

    @Get(':numeroProfessor')
    getProfessor( @Param('numeroProfessor') numeroProfessor: number ){
        return this.professorService.getProfessorByNumeroProfessor(numeroProfessor);
    }

    // UPDATE
    @Patch()
    async updateProfessor(@Body()professor: Professor ) : Promise<any> {
        return await this.professorService.updateProfessor(professor);
    }

    // DELETE
      @Delete(':numeroProfessor')
      async deleteProfessor(@Param('numeroProfessor') numeroProfessor: number){
          await this.professorService.deleteProfessor(numeroProfessor);
          return null;
      }
    }  