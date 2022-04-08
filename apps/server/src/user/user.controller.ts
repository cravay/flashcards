import { UserDto } from '@flashcards/shared';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findMany(): Promise<UserDto[]> {
    return this.userService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.userService.findOne(id);
  }
}
