import { IsMongoId, IsString } from 'class-validator';

export class CreateMusicianDto {
  @IsMongoId()
  userId: string;

  @IsMongoId()
  ensembleId: string;

  @IsString()
  role: string;
}
