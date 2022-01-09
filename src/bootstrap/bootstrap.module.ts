import { Module } from '@nestjs/common';
import { AppointmentModule } from '../appointment/appointment.module';
import { StudyModule } from '../study/study.module';

@Module({
  imports: [AppointmentModule, StudyModule],
})
export class BootstrapModule {}
