import { IsString, IsOptional } from 'class-validator';

export class UpdateEnsembleDto {
  //name
  @IsString()
  @IsOptional()
  name?: string;

  //description
  @IsString()
  @IsOptional()
  description?: string;

  //photo
  @IsString()
  @IsOptional()
  photo?: string;
}
