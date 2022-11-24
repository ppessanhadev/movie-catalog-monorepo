import { movies } from '@test/stubs/movies';

export const ghibliProviderMock = {
  listMovies: jest.fn().mockReturnValue(movies),
};
