import { UserDto } from '@flashcards/shared';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findMany(): Promise<UserDto[]> {
    return this.prisma.user.findMany({ orderBy: { name: 'asc' } });
  }

  findOne(id: number): Promise<UserDto> {
    return this.prisma.user.findUnique({
      where: { id },
      rejectOnNotFound: () => new NotFoundException(),
    });
  }
}
