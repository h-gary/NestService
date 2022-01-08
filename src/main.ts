import { NestFactory } from '@nestjs/core';
import { appointmentModule } from './appointment';
import { StudyModule } from './study';

async function bootstrap() {
  const appointment = await NestFactory.create(appointmentModule);
  const study = await NestFactory.create(StudyModule);

  await appointment.listen(3000);
  await study.listen(3000);
}

bootstrap();
