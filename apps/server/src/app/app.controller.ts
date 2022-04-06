import { Controller, Get } from '@nestjs/common';
import { Card } from '@prisma/client';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): { message: string } {
    return this.appService.getData();
  }

  @Get('cards')
  getCards(): Promise<Card[]> {
    return this.appService.getCards();
  }
}
