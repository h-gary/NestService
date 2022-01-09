import { Injectable } from '@nestjs/common';

@Injectable()
export class appointmentService {
  getHello(): string {
    return 'hello';
  }
}
