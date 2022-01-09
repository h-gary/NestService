import { Test, TestingModule } from '@nestjs/testing';
import { StudyService } from '..';

class MockStudyService implements StudyService {
  start(course: string) {
    return 'computer';
  }

  pause: (course: string) => true;
}

describe('StudyService', () => {
  let service: StudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockStudyService],
    }).compile();

    service = module.get<StudyService>(MockStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('start retun class', () => {
    const res = service.start('computer');
    expect(res).toEqual('computer');
  });
});
