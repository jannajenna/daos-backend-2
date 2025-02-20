import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Musician } from './schema/musician.shema';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Injectable()
export class MusiciansService {
  constructor(
    @InjectModel(Musician.name) private readonly musicianModel: Model<Musician>,
  ) {}

  async create(createMusicianDto: CreateMusicianDto): Promise<Musician> {
    const newMusician = new this.musicianModel(createMusicianDto);
    return newMusician.save();
  }

  async findAll(): Promise<Musician[]> {
    const musician = await this.musicianModel
      .find()
      .populate('userId')
      .populate('ensembleId')
      .exec();
    if (!musician || musician.length === 0) {
      return []; // ✅ Return an empty array if no musicians are found
    }

    return musician;
  }

  async findOne(id: string): Promise<Musician> {
    const musician = await this.musicianModel
      .findById(id)
      .populate('userId')
      .populate('ensembleId')
      .exec();
    if (!musician) throw new NotFoundException(`Musician ${id} not found`);
    return musician;
  }

  async update(
    id: string,
    updateMusicianDto: UpdateMusicianDto,
  ): Promise<Musician> {
    const updatedMusician = await this.musicianModel
      .findByIdAndUpdate(id, updateMusicianDto, { new: true })
      .exec();
    if (!updatedMusician)
      throw new NotFoundException(`Musician ${id} not found`);
    return updatedMusician;
  }

  async delete(id: string): Promise<void> {
    const deletedMusician = await this.musicianModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedMusician)
      throw new NotFoundException(`Musician ${id} not found`);
  }
}
