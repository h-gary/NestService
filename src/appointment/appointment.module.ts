import { Module } from '@nestjs/common';
import { appointmentController } from './appointment.controller';
import { appointmentService } from './appointment.service';
import { StudyModule, StudyService } from '../study';

@Module({
  imports: [StudyModule], //need consider to avoid circular dependencies
  controllers: [appointmentController],
  providers: [appointmentService, StudyService],
})
export class appointmentModule {}
