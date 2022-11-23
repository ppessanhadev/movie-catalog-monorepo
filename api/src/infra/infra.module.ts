import { Module } from '@nestjs/common';
import { ProvidersModule } from '@providers/providers.module';
import { MovieRepositoryModule } from '@entities/movie/movie.module';

@Module({
  imports: [ProvidersModule, MovieRepositoryModule],
  exports: [ProvidersModule, MovieRepositoryModule],
})
export class InfraModule {}
