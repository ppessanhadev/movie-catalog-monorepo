import { Module } from '@nestjs/common';
import controllers from '@controllers/index';

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [],
})
export class AppModule {}
