import {
  CreateDeckDto,
  DeckDto,
  DeckWithAuthorDto,
  UpdateDeckDto,
} from '@flashcards/shared';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DeckService {
  constructor(private prisma: PrismaService) {}

  create(deck: CreateDeckDto): Promise<DeckDto> {
    return this.prisma.deck.create({ data: deck });
  }

  findMany(): Promise<DeckWithAuthorDto[]> {
    return this.prisma.deck.findMany({
      include: { author: true },
      orderBy: { name: 'asc' },
    });
  }

  findOne(id: number): Promise<DeckWithAuthorDto> {
    return this.prisma.deck.findUnique({
      where: { id },
      include: { author: true },
      rejectOnNotFound: () => new NotFoundException(),
    });
  }

  update(id: number, deck: UpdateDeckDto): Promise<DeckDto> {
    return this.prisma.deck.update({ where: { id }, data: deck });
  }

  remove(id: number): Promise<DeckDto> {
    return this.prisma.deck.delete({ where: { id } });
  }
}
