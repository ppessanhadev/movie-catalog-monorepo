import { Module } from '@nestjs/common';
import { MovieRepositoryModule } from './entities/movie/movie.module';

@Module({
  imports: [MovieRepositoryModule],
  exports: [MovieRepositoryModule],
})
export class InfraModule {}
