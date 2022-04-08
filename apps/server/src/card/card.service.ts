import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from '@prisma/client';

import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  findMany(): Promise<Card[]> {
    return this.prisma.card.findMany();
  }

  findOne(id: number): Promise<Card> {
    return this.prisma.card.findUnique({
      where: { id },
      rejectOnNotFound: () => new NotFoundException(),
    });
  }
}
