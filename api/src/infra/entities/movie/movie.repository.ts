import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export class MovieRepository {
  constructor(
    @Inject(DatabaseService)
    private database: DatabaseService,
  ) {}

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
