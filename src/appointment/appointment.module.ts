import { Module } from '@nestjs/common';
import { appointmentController } from './appointment.controller';
import { appointmentService } from './appointment.service';

@Module({
  // imports: [StudyModule], //need consider to avoid circular dependencies
  controllers: [appointmentController],
  providers: [appointmentService],
})
export class appointmentModule {}
