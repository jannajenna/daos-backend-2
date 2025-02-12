import { Controller, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Controller('musicians')
export class MusicianController {
  constructor(private readonly musicianService: MusiciansService) {}

  @Post()
  async addMusician(@Body() createMusicianDto: CreateMusicianDto) {
    return this.musicianService.add(createMusicianDto);
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
    return this.musicianService.remove(id);
  }
}
