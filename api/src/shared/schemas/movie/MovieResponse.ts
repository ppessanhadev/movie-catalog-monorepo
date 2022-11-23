import { ApiProperty } from '@nestjs/swagger';
import { Movie } from './Movie';

export class MovieResponse {
  @ApiProperty({ type: [Movie] })
  movies: Movie[];

  @ApiProperty({ example: 1 })
  count: number;
}
