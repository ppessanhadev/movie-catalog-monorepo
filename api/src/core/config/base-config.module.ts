import { Module } from '@nestjs/common';
import { BaseConfig } from './base-config';

@Module({
  providers: [BaseConfig],
  exports: [BaseConfig],
})
export class BaseConfigModule {}
