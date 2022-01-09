import { Injectable } from '@nestjs/common';
import { StudyService } from '.';

@Injectable()
export class InpersonStudyService implements StudyService {
  start(course: string): string {
    return 'inperson';
  }
  pause: (course: string) => true;
}
