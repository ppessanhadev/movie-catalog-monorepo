import { MovieRepository } from '@infra/entities/movie/movie.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  constructor(
    @Inject(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  public async list(page: number) {
    const currentPage = page < 1 ? 1 : page;
    const skip = (currentPage - 1) * 10;
    const movies = await this.movieRepository.list(skip);

    const amount = await this.movieRepository.count();
    const count = Math.ceil(amount / 10);

    return { movies, count };
  }
}
