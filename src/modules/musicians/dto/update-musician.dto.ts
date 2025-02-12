import { IsMongoId, IsString } from 'class-validator';

export class UpdateMusicianDto {
  @IsMongoId()
  userId: string;

  @IsMongoId()
  ensembleId: string;

  @IsString()
  role: 'guitarist' | 'drummer' | 'vocalist' | 'bassist';
}
