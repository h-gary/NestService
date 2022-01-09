import { Injectable } from '@nestjs/common';
import { StudyService } from '.';

@Injectable()
export class VirtualStudyService implements StudyService {
  start(course: string): string {
    return 'virtual';
  }
  pause: (course: string) => true;
}
