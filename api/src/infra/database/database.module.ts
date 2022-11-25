import { Module } from '@nestjs/common';
import { GhibliModule } from '@providers/ghibli/ghibli.module';
import { DatabaseService } from '@infra/database/database.service';

@Module({
  imports: [GhibliModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
