import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateDeckApiDto,
  DeckApiDto,
  DeckWithAuthorApiDto,
  UpdateDeckApiDto,
} from './deck.api-dto';
import { DeckService } from './deck.service';

@ApiTags('decks')
@Controller('decks')
export class DeckController {
  constructor(private deckService: DeckService) {}

  @Post()
  create(@Body() deck: CreateDeckApiDto): Promise<DeckApiDto> {
    return this.deckService.create(deck);
  }

  @Get()
  findMany(): Promise<DeckWithAuthorApiDto[]> {
    return this.deckService.findMany();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeckWithAuthorApiDto> {
    return this.deckService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() deck: UpdateDeckApiDto
  ): Promise<DeckApiDto> {
    return this.deckService.update(id, deck);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeckApiDto> {
    return this.deckService.remove(id);
  }
}
