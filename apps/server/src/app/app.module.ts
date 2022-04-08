import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';

import { CardModule } from '../card/card.module';
import { DatabaseModule } from '../database/database.module';
import { HealthModule } from '../health/health.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    LoggerModule.forRoot(),
    UserModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ZodValidationPipe }],
})
export class AppModule {}
