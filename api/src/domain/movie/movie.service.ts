import { Inject, Injectable } from '@nestjs/common';
import { MovieRepository } from '@infra/entities/movie/movie.repository';
import { GhibliProvider } from '@infra/providers/ghibli/ghibli.provider';
import { Movie } from '@prisma/client';

@Injectable()
export class MovieService {
  constructor(
    @Inject(MovieRepository)
    private movieRepository: MovieRepository,

    @Inject(GhibliProvider)
    private ghibliProvider: GhibliProvider,
  ) {}

  public async list(page: number) {
    const currentPage = page < 1 ? 1 : page;
    const skip = (currentPage - 1) * 10;
    const movies = await this.movieRepository.list(skip);

    const amount = await this.movieRepository.count();
    const count = Math.ceil(amount / 10);

    return { movies, count };
  }

  public async update() {
    const moviesGhibli = (await this.ghibliProvider.listMovies()) as unknown;

    await this.movieRepository.deleteAll();
    await this.movieRepository.insertMany(moviesGhibli as Movie[]);
  }
}
