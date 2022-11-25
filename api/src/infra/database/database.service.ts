import { PrismaClient } from '@prisma/client';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { GhibliProvider } from '@infra/providers/ghibli/ghibli.provider';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor(
    @Inject(GhibliProvider)
    private ghibliProvider: GhibliProvider,
  ) {
    super({
      log: ['query'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    const data = await this.ghibliProvider.listMovies();
    await this.movie.createMany({ data });
  }
}
