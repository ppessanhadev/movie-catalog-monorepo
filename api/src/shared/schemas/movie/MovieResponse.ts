import { Movie } from './Movie';
import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({ type: [Movie] })
  movies: Movie[];

  @ApiProperty({ example: 1 })
  count: number;
}
