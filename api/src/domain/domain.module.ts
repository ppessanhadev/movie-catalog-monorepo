import { Module } from '@nestjs/common';
import { MovieDomainModule } from '@domain/movie/movie.module';

@Module({
  imports: [MovieDomainModule],
  exports: [MovieDomainModule],
})
export class DomainModule {}
