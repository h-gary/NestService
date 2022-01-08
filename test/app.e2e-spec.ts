import { Test, TestingModule } from '@nestjs/testing';
import { INestappointmentlication } from '@nestjs/common';
import * as request from 'supertest';
import { appointmentModule } from './../src/appointment/appointment.module';

describe('appointmentController (e2e)', () => {
  let appointment: INestappointmentlication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [appointmentModule],
    }).compile();

    appointment = moduleFixture.createNestappointmentlication();
    await appointment.init();
  });

  it('appointment/ (GET)', () => {
    // eslint-disable-next-line prettier/prettier
    return request(appointment.getHttpServer()).get('/').expect(200).expect('Hello World!!!!');
  });
});
