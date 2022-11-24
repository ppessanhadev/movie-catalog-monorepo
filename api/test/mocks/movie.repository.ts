import { movies } from '@test/stubs/movies';

export const repositoryMock = {
  createMany: jest.fn(),
  findMany: jest.fn(),
  count: jest.fn().mockReturnValue(movies.length),
  list: jest.fn((skip) => skip).mockReturnValue(movies),
};
