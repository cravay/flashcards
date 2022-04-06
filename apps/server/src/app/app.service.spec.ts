import { Test } from '@nestjs/testing';

import { PrismaService } from '../database/prisma.service';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, { provide: PrismaService, useValue: class {} }],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to flashcards-server!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to flashcards-server!',
      });
    });
  });
});
