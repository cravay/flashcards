import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    schema: { type: 'object', properties: { message: { type: 'string' } } },
  })
  getData(): { message: string } {
    return this.appService.getData();
  }
}
