import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';

import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getData(): { message: string } {
    return { message: 'Welcome to flashcards-server!' };
  }

  getCards(): Promise<Card[]> {
    return this.prisma.card.findMany();
  }
}
