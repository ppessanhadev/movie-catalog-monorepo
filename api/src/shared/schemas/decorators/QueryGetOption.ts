import { Type } from '@nestjs/common';
import DefaultOption from '@schemas/decorators/DefaultOption';

export class QueryGetOption extends DefaultOption {
  responseType: string | Type<unknown>;
  name?: string;
}
