import { Test, TestingModule } from '@nestjs/testing';
import { StudyService } from '..';
import { StudyController } from '../study.controller';

class MockStudyService implements StudyService {
  start(course: string) {
    return course;
  }
  pause: (course: string) => false;
}

describe('StudyController', () => {
  let controller: StudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyController],
      providers: [
        MockStudyService,
        {
          provide: 'studyService',
          useFactory: (...study: StudyService[]) => study,
          inject: [MockStudyService],
        },
      ],
    }).compile();

    controller = module.get<StudyController>(StudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //cover exception of undefined
  // it('start called', async () => {
  //   const res = await controller.start();
  //   expect(res).toEqual('');
  // });
});
