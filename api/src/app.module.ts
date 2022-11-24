import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@shared/config';
import { ControllerModule } from '@controllers/controller.module';

@Module({
  imports: [
    ControllerModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
