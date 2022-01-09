export interface StudyService {
  start: (course: string) => string;
  pause: (course: string) => boolean;
}
