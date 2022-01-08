import { Controller, Get } from '@nestjs/common';
import { appointmentService } from './appointment.service';

@Controller()
export class appointmentController {
  constructor(private readonly appointmentService: appointmentService) {}

  @Get()
  getHello(): string {
    return this.appointmentService.getHello();
  }
}
