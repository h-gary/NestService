import { ApiTags } from '@nestjs/swagger';
import { AppointmentModel } from '../appointmentModel';

export type NewAppointmentRequestModel = Omit<AppointmentModel, 'userId' | 'id'>;
