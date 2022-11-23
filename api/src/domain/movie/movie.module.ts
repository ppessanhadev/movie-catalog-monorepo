import { Module } from '@nestjs/common';
import { InfraModule } from '@infra/infra.module';
import { MovieService } from '@domain/movie/movie.service';

@Module({
  imports: [InfraModule],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieDomainModule {}
