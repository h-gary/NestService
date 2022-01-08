export interface StudyService {
  start: (course: string) => boolean;
  pause: (course: string) => boolean;
}
