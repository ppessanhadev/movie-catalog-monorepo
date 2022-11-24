import { Provider } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { httpModuleMock } from '@test/mocks/http-module';
import { GhibliProvider } from '@providers/ghibli/ghibli.provider';
import { ghibliListMovieResponseMock } from '@test/stubs/ghibli-response';

const httpModule: Provider = {
  provide: HttpService,
  useValue: httpModuleMock(ghibliListMovieResponseMock),
};

export const mockGhibliProviderModule: Provider[] = [
  GhibliProvider,
  httpModule,
];
