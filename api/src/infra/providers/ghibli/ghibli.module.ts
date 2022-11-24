import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GhibliProvider } from '@providers/ghibli/ghibli.provider';

@Module({
  imports: [HttpModule],
  providers: [GhibliProvider],
  exports: [GhibliProvider],
})
export class GhibliModule {}
