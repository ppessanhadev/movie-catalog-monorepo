import { of } from 'rxjs';

export const httpModuleMock = <T>(mockedValue: T) => {
  return {
    get: jest.fn().mockReturnValue(of({ data: mockedValue })),
  };
};
