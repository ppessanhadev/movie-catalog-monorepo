import { Module } from '@nestjs/common';
import { GhibliModule } from '@providers/ghibli/gihbli.module';

@Module({
  imports: [GhibliModule],
  exports: [GhibliModule],
})
export class ProvidersModule {}
