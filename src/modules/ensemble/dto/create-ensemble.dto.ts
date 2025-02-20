import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateEnsembleDto {
  //name
  @IsString()
  @IsNotEmpty()
  name: string;

  //description
  @IsString()
  @IsOptional()
  description?: string;

  //photo
  @IsString()
  @IsOptional()
  photo?: string;
}
