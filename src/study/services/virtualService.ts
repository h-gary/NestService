import { Injectable } from '@nestjs/common';
import { StudyService } from '.';

@Injectable()
export class VirtualStudyService implements StudyService {
  start(course: string): boolean {
    return true;
  }
  pause: (course: string) => true;
}
