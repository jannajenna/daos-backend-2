import { Injectable } from '@nestjs/common';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { UpdateEnsembleDto } from './dto/update-ensemble.dto';

@Injectable()
export class EnsembleService {
  create(createEnsembleDto: CreateEnsembleDto) {
    return 'This action adds a new ensemble';
  }

  findAll() {
    return `This action returns all ensemble`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ensemble`;
  }

  update(id: string, updateEnsembleDto: UpdateEnsembleDto) {
    return `This action updates a #${id} ensemble`;
  }

  remove(id: string) {
    return `This action removes a #${id} ensemble`;
  }
}
