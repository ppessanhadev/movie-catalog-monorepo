import { Test } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { GhibliProvider } from '@providers/ghibli/ghibli.provider';
import { mockGhibliProviderModule } from '@test/infra/providers/ghibli/ghibli.provider.spec.setup';
import { ghibliListMovieResponseMock } from '@test/stubs/ghibli-response';

describe('Ghibli Provider', () => {
  let ghibliProvider: GhibliProvider;
  let axiosService: HttpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockGhibliProviderModule,
    }).compile();

    axiosService = moduleRef.get(HttpService);
    ghibliProvider = moduleRef.get(GhibliProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(axiosService).toBeDefined();
    expect(ghibliProvider).toBeDefined();
  });

  describe('listMovies()', () => {
    it('should return transformed data', async () => {
      const [{ title, movie_banner: banner, description, producer, director }] =
        ghibliListMovieResponseMock;
      const response = await ghibliProvider.listMovies();

      expect(response).toStrictEqual([
        { title, banner, producer, director, description },
      ]);
    });

    it('should make request properly', async () => {
      await ghibliProvider.listMovies();

      expect(axiosService.get).toHaveBeenCalledTimes(1);
      expect(axiosService.get).toHaveBeenCalledWith(
        'https://ghibliapi.herokuapp.com/films',
      );
    });
  });
});
