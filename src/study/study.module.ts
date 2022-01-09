import { InpersonStudyService, StudyService, VirtualStudyService } from './services';
import { Module } from '@nestjs/common';
import { HomeworkController } from './homework.Controller';
import { StudyController } from './study.controller';

@Module({
  controllers: [StudyController, HomeworkController],
  providers: [
    VirtualStudyService,
    InpersonStudyService,
    {
      provide: 'studyService',
      useFactory: (...study: StudyService[]) => study,
      inject: [VirtualStudyService, InpersonStudyService],
    },
  ],
})
export class StudyModule {}
