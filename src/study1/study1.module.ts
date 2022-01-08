import { StudyService } from '@api/study/services';
import { Module } from '@nestjs/common';
import { HomeworkController } from '../study/homeworkController';
import { Study1Controller } from './study1.controller';

@Module({
  controllers: [HomeworkController],
  providers: [StudyService],
})
export class Study1Module {}
