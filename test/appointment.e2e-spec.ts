import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { appointmentModule } from '../src/appointment/appointment.module';

describe('appointmentController (e2e)', () => {
  let appointment: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [appointmentModule],
    }).compile();

    appointment = moduleFixture.createNestApplication();
    await appointment.init();
  });

  it('appointment/ (GET)', () => {
    // eslint-disable-next-line prettier/prettier
    return request(appointment.getHttpServer()).get('/').expect(200).expect('Hello World!!!!');
  });
});
