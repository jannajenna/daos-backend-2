import {
  Controller,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Controller('musicians')
export class MusiciansController {
  constructor(private readonly musicianService: MusiciansService) {}

  @Post()
  async addMusician(@Body() createMusicianDto: CreateMusicianDto) {
    return this.musicianService.create(createMusicianDto);
  }

  @Get()
  async findAll() {
    const musicians = await this.musicianService.findAll();
    console.log('Musicians found:', musicians); // ✅ Debugging Log
    return musicians;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const musician = await this.musicianService.findOne(id);
    if (!musician)
      throw new NotFoundException(`Musician not found - ID: ${id}`);
    return musician;
  }

  @Patch(':id')
  async updateMusician(
    @Param('id') id: string,
    @Body() updateMusicianDto: UpdateMusicianDto,
  ) {
    return this.musicianService.update(id, updateMusicianDto);
  }

  @Delete(':id')
  async removeMusician(@Param('id') id: string) {
    return this.musicianService.delete(id);
  }
}
