import { Module } from '@nestjs/common';
import { MovieDomainModule } from './movie/movie.module';

@Module({
  imports: [MovieDomainModule],
  exports: [MovieDomainModule],
})
export class DomainModule {}
