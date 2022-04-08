import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CardApiDto } from './card.api-dto';
import { CardService } from './card.service';

@ApiTags('cards')
@Controller('cards')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  findMany(): Promise<CardApiDto[]> {
    return this.cardService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CardApiDto> {
    return this.cardService.findOne(id);
  }
}
