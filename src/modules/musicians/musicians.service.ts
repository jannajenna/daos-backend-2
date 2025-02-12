import { Injectable } from '@nestjs/common';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Injectable()
export class MusiciansService {
  create(createMusicianDto: CreateMusicianDto) {
    return 'This action adds a new musician';
  }

  findAll() {
    return `This action returns all musicians`;
  }

  findOne(id: string) {
    return `This action returns a #${id} musician`;
  }

  update(id: string, updateMusicianDto: UpdateMusicianDto) {
    return `This action updates a #${id} musician`;
  }

  remove(id: string) {
    return `This action removes a #${id} musician`;
  }
}
