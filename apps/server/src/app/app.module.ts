import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { HealthModule } from '../health/health.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, HealthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
