import { Test } from '@nestjs/testing';
import { mockModule } from '@test/domain/movie/movie.spec.setup';
import { movies } from '@test/stubs/movies';
import { MovieService } from '@domain/movie/movie.service';
import { GhibliProvider } from '@providers/ghibli/ghibli.provider';
import { MovieRepository } from '@infra/repositories/movie/movie.repository';

describe('Movie Service', () => {
  let movieService: MovieService;
  let movieRepository: MovieRepository;
  let ghibliProvider: GhibliProvider;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockModule,
    }).compile();

    movieService = moduleRef.get<MovieService>(MovieService);
    movieRepository = moduleRef.get<MovieRepository>(MovieRepository);
    ghibliProvider = moduleRef.get<GhibliProvider>(GhibliProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(movieService).toBeDefined();
    expect(movieRepository).toBeDefined();
    expect(ghibliProvider).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of movies sucessfully', async () => {
      const response = await movieService.list(0);
      const pages = Math.ceil(movies.length / 10);

      expect(response).toStrictEqual({ count: pages, movies });
    });

    it('should call repository with correctly arguments', async () => {
      await movieService.list(1);
      expect(movieRepository.list).toHaveBeenCalledWith(0);

      await movieService.list(2);
      expect(movieRepository.list).toHaveBeenCalledWith(10);

      expect(movieRepository.count).toBeCalledTimes(2);
    });
  });
});
