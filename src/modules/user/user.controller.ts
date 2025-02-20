import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Creates a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('Received User:', createUserDto);
    return this.userService.create(createUserDto);
  }

  //Gets/finds all users
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  //Gets/finds one user
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) throw new NotFoundException(`User not found - ID: ${id}`);
    return user;
  }

  //Updates one user
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  //Removes one user
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
