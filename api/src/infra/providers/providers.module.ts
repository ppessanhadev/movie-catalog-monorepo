import { Module } from '@nestjs/common';
import { GhibliModule } from './ghibli/gihbli.module';

@Module({
  imports: [GhibliModule],
  exports: [GhibliModule],
})
export class ProvidersModule {}
