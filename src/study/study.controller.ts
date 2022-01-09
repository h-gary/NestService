import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

import { StudyService } from '.';
//@ApiTags('study')
@Controller('study')
//@UseGuards(JwtAuth)
export class StudyController {
  constructor(@Inject('studyService') private study: StudyService[]) {}

  //@UseGuards(JwtAuth)
  @ApiExcludeEndpoint() //exclude from swagger endpoint
  @Post('start')
  start(): Promise<void> {
    //use service base on request.
    return;
  }

  @Get('hello')
  getHello(): string {
    return 'hello';
  }

  @Get('TestSwagger')
  testSwagger(): string {
    return 'I see Swagger';
  }
}
