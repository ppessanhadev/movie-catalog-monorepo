import { movies } from '@test/stubs/movies';

export const repositoryMock = {
  insertMany: jest.fn(),
  deleteAll: jest.fn(),
  count: jest.fn().mockReturnValue(movies.length),
  list: jest.fn((skip) => skip).mockReturnValue(movies),
};
