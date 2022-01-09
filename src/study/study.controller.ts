import { BadRequestException, Controller, Get, Inject, Post } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

import { StudyService } from '.';
//@ApiTags('study')
@Controller('study')
//@UseGuards(JwtAuth)
export class StudyController {
  private readonly studyService: StudyService;
  constructor(@Inject('studyService') private studyservices: StudyService[], @Inject(REQUEST) private request) {
    if (this.request.headers['class'] === 'virtual') {
      this.studyService = this.studyservices[0];
    } else if (this.request.headers['class'] === 'inperson') {
      this.studyService = this.studyservices[1];
    } else {
      throw new BadRequestException('no class found in header');
    }
  }

  //@UseGuards(JwtAuth)
  //@ApiExcludeEndpoint() //exclude from swagger endpoint
  @Post('start')
  start(): string {
    //use service base on request.
    const res = this.studyService.start('');
    return res;
  }

  @Get('hello')
  getHello(): string {
    return 'hello';
  }

  // @Get('testSwagger')
  // testSwagger(): string {
  //   return 'I see Swagger';
  // }
}
