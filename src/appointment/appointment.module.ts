import { Module } from '@nestjs/common';
import { appointmentController } from './appointment.controller';
import { appointmentService } from './appointment.service';
import { IdValidation } from './pipes/idValidation';

@Module({
  // imports: [StudyModule], //need consider to avoid circular dependencies
  controllers: [appointmentController],
  providers: [appointmentService, IdValidation],
})
export class AppointmentModule {}
