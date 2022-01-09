import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class IdValidation implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata): Promise<boolean> {
    return !!value;
  }
}
