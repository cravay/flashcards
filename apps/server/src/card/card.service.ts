import { CardDto } from '@flashcards/shared';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  findMany(): Promise<CardDto[]> {
    return this.prisma.card.findMany();
  }

  findOne(id: number): Promise<CardDto> {
    return this.prisma.card.findUnique({
      where: { id },
      rejectOnNotFound: () => new NotFoundException(),
    });
  }
}
