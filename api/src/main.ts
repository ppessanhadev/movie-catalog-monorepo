import { AppModule } from 'src/app.module';
import { NestFactory } from '@nestjs/core';
import { BaseConfig } from '@core/config/base-config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, VersioningType } from '@nestjs/common';

const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Movie catalog API')
    .setDescription('A simple API maded to consult a list of movies')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};

const appConfig = (app: INestApplication) => {
  app
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })
    .setGlobalPrefix('api');
};

const initialize = async () => {
  const { port } = new BaseConfig();
  const app = await NestFactory.create(AppModule);

  appConfig(app);
  swaggerConfig(app);

  await app.listen(3000);
  Logger.log(`Server is running on port ${port}`, 'NestApplication');
};

initialize();
