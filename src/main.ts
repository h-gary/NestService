import { NestFactory } from '@nestjs/core';
import { appointmentModule } from './appointment/appointment.module';
import { StudyModule } from './study/study.module';

async function bootstrap() {
  const appointment = await NestFactory.create(appointmentModule);
  const study = await NestFactory.create(StudyModule);

  await appointment.listen(3000);
}
bootstrap();
