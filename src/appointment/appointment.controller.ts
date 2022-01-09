import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { query } from 'express';
import { appointmentService } from './appointment.service';
import { NewAppointmentRequestModel } from './models/requests/newAppointmentRequestModel';
import { IdValidation } from './pipes/idValidation';
import { NewAppointmentValidation } from './pipes/newAppointmentValidation';

@Controller('appointment')
export class appointmentController {
  constructor(private readonly appointmentService: appointmentService) {}

  @Post()
  newAppointment(@Body(new NewAppointmentValidation()) request: NewAppointmentRequestModel): string {
    // call service, return appointment Model

    return this.appointmentService.getHello();
  }

  @Get(':id')
  getAppointmentById(@Param('id', new IdValidation()) id: string): string {
    return this.appointmentService.getHello();
  }
}
