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
import { EnsembleService } from './ensemble.service';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { UpdateEnsembleDto } from './dto/update-ensemble.dto';

//https://medium.com/@ckekula/understanding-nest-js-controllers-917c2fa106be
//A controller’s purpose is to receive specific requests for the application.
// The routing mechanism controls which controller receives which requests.
@Controller('ensembles')
export class EnsembleController {
  //constructor allows us to use 'this'
  constructor(private readonly ensembleService: EnsembleService) {}

  @Post()
  //Body: retrieve the POST request body
  async create(@Body() createEnsembleDto: CreateEnsembleDto) {
    return this.ensembleService.create(createEnsembleDto);
  }

  @Get()
  async findAll() {
    return this.ensembleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ensemble = await this.ensembleService.findOne(id);
    //https://docs.nestjs.com/exception-filters#exception-filters-1
    if (!ensemble)
      throw new NotFoundException('Ensemble not found - Id: $(id)');
    return ensemble;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnsembleDto: UpdateEnsembleDto,
  ) {
    return this.ensembleService.update(id, updateEnsembleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ensembleService.delete(id);
  }
}
