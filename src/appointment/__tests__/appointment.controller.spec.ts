import { Test, TestingModule } from '@nestjs/testing';
import { appointmentController, appointmentService } from '..';

describe('appointmentController', () => {
  let controller: appointmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [appointmentController],
      providers: [appointmentService],
    }).compile();

    controller = module.get<appointmentController>(appointmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!!!!');
    });
  });
});
