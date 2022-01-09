import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppointmentModule } from './appointment';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { StudyModule } from './study/study.module';

async function bootstrap() {
  // app start here, more apps can be imported in boostrapModule
  const appStart = await NestFactory.create(BootstrapModule);

  //initialize apps
  const appointment = await NestFactory.create(AppointmentModule);
  appointment.init();
  const study = await NestFactory.create(StudyModule);
  study.init();

  //setup swagger
  const options = new DocumentBuilder()
    .setTitle('dexcare services example')
    .setDescription('The dexcare API description')
    .setVersion('1.0')
    //.addTag('dexcare')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(appStart, options);
  SwaggerModule.setup('api', appStart, document);

  await appStart.listen(3000);
}

bootstrap();
