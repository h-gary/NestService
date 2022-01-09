import { Controller, Get } from '@nestjs/common';
import { appointmentService } from './appointment.service';

@Controller('appointment')
export class appointmentController {
  constructor(private readonly appointmentService: appointmentService) {}

  @Get('hello')
  getHello(): string {
    return this.appointmentService.getHello();
  }
}
