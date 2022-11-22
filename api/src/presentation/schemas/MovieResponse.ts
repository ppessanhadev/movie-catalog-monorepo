import { ApiProperty } from '@nestjs/swagger';

class Movie {
  @ApiProperty({ example: '094df7c4-06e7-4160-a4ad-e96bedab90d9' })
  id: string;

  @ApiProperty({ example: '' })
  title: string;

  @ApiProperty({ example: '' })
  banner: string;

  @ApiProperty({ example: '' })
  description: string;

  @ApiProperty({ example: '' })
  productor: string;

  @ApiProperty({ example: '' })
  director: string;
}

export class MovieResponse {
  @ApiProperty({ type: [Movie] })
  movies: Movie[];

  @ApiProperty({ example: 1 })
  count: number;
}
