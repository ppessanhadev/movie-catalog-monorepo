import { Provider } from '@nestjs/common';
import { repositoryMock } from '@test/mocks/movie.repository';
import { MovieService } from '@domain/movie/movie.service';
import { ghibliProviderMock } from '@test/mocks/ghibli.provider';
import { GhibliProvider } from '@providers/ghibli/ghibli.provider';
import { MovieRepository } from '@infra/repositories/movie/movie.repository';

const movieRepositoryModule: Provider = {
  provide: MovieRepository,
  useValue: repositoryMock,
};

const ghibliProvider: Provider = {
  provide: GhibliProvider,
  useValue: ghibliProviderMock,
};

export const mockModule: Provider[] = [
  MovieService,
  movieRepositoryModule,
  ghibliProvider,
];
