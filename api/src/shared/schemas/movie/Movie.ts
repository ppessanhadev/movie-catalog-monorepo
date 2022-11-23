import { ApiProperty } from '@nestjs/swagger';

export class Movie {
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
