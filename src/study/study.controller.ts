import { Controller, Inject, Post } from '@nestjs/common';
import { StudyService } from '.';

@Controller('study')
export class StudyController {
  constructor(@Inject('studyService') private study: StudyService[]) {}

  @Post()
  start(): Promise<void> {
    //use service base on request.
    return;
  }
}
