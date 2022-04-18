import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}
