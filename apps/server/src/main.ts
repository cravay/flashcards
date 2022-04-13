/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const port = process.env.PORT || 3333;

  app.enableCors({ origin: environment.corsOrigin });

  const config = new DocumentBuilder()
    .setTitle('Flashcard API')
    .setDescription('REST Api to manage flashcard decks')
    .setVersion('1.0')
    .build();

  patchNestjsSwagger(); // See https://github.com/anatine/zod-plugins/tree/main/libs/zod-nestjs
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap().catch(Logger.error);
