import { Test, TestingModule } from '@nestjs/testing';
import { appointmentController } from '../appointment.controller';
import { appointmentService } from '../appointment.service';

describe('appointmentController', () => {
  let appointmentController: appointmentController;

  beforeEach(async () => {
    const appointment: TestingModule = await Test.createTestingModule({
      controllers: [appointmentController],
      providers: [appointmentService],
    }).compile();

    appointmentController = appointment.get<appointmentController>(appointmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appointmentController.getHello()).toBe('Hello World!!!!');
    });
  });
});
