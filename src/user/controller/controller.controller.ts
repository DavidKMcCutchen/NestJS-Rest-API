import {
  Controller,
  Post,
  Patch,
  Get,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
