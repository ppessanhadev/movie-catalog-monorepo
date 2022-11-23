import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { HttpService as AxiosService } from '@nestjs/axios';
import { GhibliAdapter } from '@providers/ghibli/ghibli.adapter';
import { GhibliListMoviesResponse } from '@interfaces/GhibliListMovieRespose';

@Injectable()
export class GhibliProvider extends GhibliAdapter {
  constructor(private axiosService: AxiosService) {
    super();
  }

  public async listMovies() {
    const { data } = await firstValueFrom(
      this.axiosService.get<GhibliListMoviesResponse[]>(
        'https://ghibliapi.herokuapp.com/films',
      ),
    );

    return data;
  }
}
