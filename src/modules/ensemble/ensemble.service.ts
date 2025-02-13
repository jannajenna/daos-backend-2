import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensemble } from './schemas/ensemble.schema';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { UpdateEnsembleDto } from './dto/update-ensemble.dto';

@Injectable()
export class EnsembleService {
  constructor(
    @InjectModel(Ensemble.name) private readonly ensembleModel: Model<Ensemble>,
  ) {}
  //create an ensemble
  async create(createEnsembleDto: CreateEnsembleDto): Promise<Ensemble> {
    const newEnsemble = new this.ensembleModel(createEnsembleDto);
    return newEnsemble.save();
  }
  //find all
  async findAll(): Promise<Ensemble[]> {
    return this.ensembleModel.find().exec();
  }
  //find one
  async findOne(id: string): Promise<Ensemble> {
    const ensemble = await this.ensembleModel.findById(id).exec();
    if (!ensemble) throw new NotFoundException(`Ensemble ${id} not found`);
    return ensemble;
  }
  //update ensemble
  async update(
    id: string,
    updateEnsembleDto: UpdateEnsembleDto,
  ): Promise<Ensemble> {
    const updatedEnsemble = await this.ensembleModel
      .findByIdAndUpdate(id, updateEnsembleDto, { new: true })
      .exec();
    if (!updatedEnsemble)
      throw new NotFoundException(`Ensemble ${id} not found`);
    return updatedEnsemble;
  }
  //delete ensemble
  async delete(id: string): Promise<void> {
    const deletedEnsemble = await this.ensembleModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedEnsemble)
      throw new NotFoundException(`Ensemble ${id} not found`);
  }
}
