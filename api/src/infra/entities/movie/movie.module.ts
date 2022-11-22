import { Module } from '@nestjs/common';
import { MovieRepository } from './movie.repository';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [MovieRepository],
  exports: [MovieRepository],
})
export class MovieRepositoryModule {}
