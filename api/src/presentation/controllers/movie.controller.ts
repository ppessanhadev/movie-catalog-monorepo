import { MovieService } from '@domain/movie/movie.service';
import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { MovieResponse } from '../schemas/MovieResponse';

@ApiTags('Movies Route')
@Controller('movies')
export class MovieController {
  constructor(
    @Inject(MovieService)
    private movieService: MovieService,
  ) {}

  @ApiOperation({ summary: 'This route lists all movies with pagination' })
  @ApiOkResponse({ type: MovieResponse })
  @ApiQuery({ name: 'page' })
  @Get()
  public async list(@Query('page', ParseIntPipe) page: number) {
    return this.movieService.list(page);
  }
}
