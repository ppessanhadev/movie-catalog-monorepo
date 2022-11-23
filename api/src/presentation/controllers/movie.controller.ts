import { ApiTags } from '@nestjs/swagger';
import { Controller, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { MovieService } from '@domain/movie/movie.service';
import { MovieResponse } from '@schemas/movie/MovieResponse';
import { CustomQueryGet } from '@decorators/CustomQueryGet.decorator';

@ApiTags('Movies Route')
@Controller('movies')
export class MovieController {
  constructor(
    @Inject(MovieService)
    private movieService: MovieService,
  ) {}

  @CustomQueryGet({
    summary: 'This route lists all movies with pagination',
    responseType: MovieResponse,
    name: 'page',
  })
  public async list(@Query('page', ParseIntPipe) page: number) {
    return this.movieService.list(page);
  }

  @CustomQueryGet({
    route: 'update',
    summary: 'This route lists all movies with pagination',
    responseType: MovieResponse,
  })
  public async update() {
    return this.movieService.update();
  }
}
