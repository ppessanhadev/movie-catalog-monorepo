import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseConfig {
  public get port() {
    return process.env.PORT || '3000';
  }
}
