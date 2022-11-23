import { Type } from '@nestjs/common';
import DefaultOption from './DefaultOption';

export class QueryGetOption extends DefaultOption {
  responseType: string | Type<unknown>;
  query: string;
}
