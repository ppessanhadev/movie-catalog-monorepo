import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { MovieRepository } from '@repositories/movie/movie.repository';

@Module({
  imports: [DatabaseModule],
  providers: [MovieRepository],
  exports: [MovieRepository],
})
export class MovieRepositoryModule {}
