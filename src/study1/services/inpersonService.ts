import { Injectable } from '@nestjs/common';
import { StudyService } from '.';

@Injectable()
export class InpersonStudyService implements StudyService {
  start: (course: string) => boolean;
  pause: (course: string) => boolean;
}
