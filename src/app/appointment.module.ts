import { Module } from '@nestjs/common';
import { appointmentController } from './appointment.controller';
import { appointmentService } from './appointment.service';
import { StudyModule } from './study/study.module';
import { Study } from './study';

@Module({
  imports: [StudyModule],
  controllers: [appointmentController],
  providers: [appointmentService, Study],
})
export class appointmentModule {}
