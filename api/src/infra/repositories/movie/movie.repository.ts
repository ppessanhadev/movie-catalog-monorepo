import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';
import { Movie } from '@prisma/client';

@Injectable()
export class MovieRepository {
  constructor(
    @Inject(DatabaseService)
    private database: DatabaseService,
  ) {}

  public async insertMany(data: Movie[]) {
    return this.database.movie.createMany({ data });
  }

  public async deleteAll() {
    return this.database.movie.deleteMany({});
  }

  public async list(skip: number) {
    return this.database.movie.findMany({
      skip,
      take: 10,
    });
  }

  public async count() {
    return this.database.movie.count();
  }
}
