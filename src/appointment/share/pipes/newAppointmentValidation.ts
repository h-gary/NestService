import { BadRequestException, PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { NewAppointmentRequestModel } from '../models/requests/newAppointmentRequestModel';

@Injectable()
export class NewAppointmentValidation implements PipeTransform<NewAppointmentRequestModel> {
  async transform(value: NewAppointmentRequestModel, metadata: ArgumentMetadata): Promise<boolean> {
    if (['virtual', 'inperson'].indexOf(value.type) === -1) {
      throw new BadRequestException('invalid appointment type');
    }
    //other conditions

    return true;
  }
}
