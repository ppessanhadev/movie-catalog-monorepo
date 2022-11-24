import { firstValueFrom } from 'rxjs';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService as AxiosService } from '@nestjs/axios';
import { GhibliAdapter } from '@providers/ghibli/ghibli.adapter';
import { GhibliListMoviesResponse } from '@shared/types/GhibliListMovieResponse';

@Injectable()
export class GhibliProvider extends GhibliAdapter {
  constructor(private axiosService: AxiosService) {
    super();
  }

  public async listMovies() {
    try {
      const { data } = await firstValueFrom(
        this.axiosService.get<GhibliListMoviesResponse[]>(
          'https://ghibliapi.herokuapp.com/films',
        ),
      );

      return this.moviesAdapter(data);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
