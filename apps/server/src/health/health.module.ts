import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { DatabaseModule } from '../database/database.module';
import { HealthController } from './health.controller';
import { PrismaHealthIndicator } from './prisma.health-indicator';

@Module({
  imports: [DatabaseModule, TerminusModule],
  providers: [PrismaHealthIndicator],
  controllers: [HealthController],
})
export class HealthModule {}
