import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Controller('musicians')
export class MusiciansController {
  constructor(private readonly musiciansService: MusiciansService) {}

  @Post()
  create(@Body() createMusicianDto: CreateMusicianDto) {
    return this.musiciansService.create(createMusicianDto);
  }

  @Get()
  findAll() {
    return this.musiciansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musiciansService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMusicianDto: UpdateMusicianDto,
  ) {
    return this.musiciansService.update(id, updateMusicianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musiciansService.remove(id);
  }
}
