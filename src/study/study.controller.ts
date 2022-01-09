import { Controller, Inject, Post } from '@nestjs/common';

import { StudyService } from '.';

@Controller('study')
//@UseGuards(JwtAuth)
export class StudyController {
  constructor(@Inject('studyService') private study: StudyService[]) {}

  //@UseGuards(JwtAuth)
  @Post()
  start(): Promise<void> {
    //use service base on request.
    return;
  }
}
