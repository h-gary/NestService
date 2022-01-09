import { PipeTransform, Injectable, ArgumentMetadata, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class IdValidation implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata): Promise<boolean> {
    if (value === 'tobe400') throw new UnauthorizedException('to be 400');
    return true;
  }
}
