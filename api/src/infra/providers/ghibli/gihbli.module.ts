import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GhibliProvider } from './ghibli.provider';

@Module({
  imports: [HttpModule],
  providers: [GhibliProvider],
  exports: [GhibliProvider],
})
export class GhibliModule {}
