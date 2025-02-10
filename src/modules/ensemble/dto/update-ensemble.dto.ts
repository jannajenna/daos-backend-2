import { PartialType } from '@nestjs/mapped-types';
import { CreateEnsembleDto } from './create-ensemble.dto';
import { IsString } from 'class-validator';

//To create a type with the same fields, but with each one optional, use PartialType() passing the class reference (Create...Dto) as an argument:

export class UpdateEnsembleDto extends PartialType(CreateEnsembleDto) {

    //name
    @IsString()
    //description
    //photo
}
