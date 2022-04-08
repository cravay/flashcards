import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserApiDto } from './user.api-dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findMany(): Promise<UserApiDto[]> {
    return this.userService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<UserApiDto> {
    return this.userService.findOne(id);
  }
}
