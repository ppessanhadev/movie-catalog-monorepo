import { Module } from '@nestjs/common';
import { GhibliModule } from '@providers/ghibli/ghibli.module';

@Module({
  imports: [GhibliModule],
  exports: [GhibliModule],
})
export class ProvidersModule {}
