import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/domain.module';
import { MovieController } from '@controllers/movie.controller';

@Module({
  imports: [DomainModule],
  controllers: [MovieController],
})
export class ControllerModule {}
