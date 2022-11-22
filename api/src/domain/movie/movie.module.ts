import { InfraModule } from '@infra/infra.module';
import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';

@Module({
  imports: [InfraModule],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieDomainModule {}
