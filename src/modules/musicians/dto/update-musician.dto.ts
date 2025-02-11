import { IsString, IsOptional } from 'class-validator';

export class UpdateMusicianDto {
  @IsOptional()
  @IsString()
  role?: 'guitarist' | 'drummer' | 'vocalist' | 'bassist';
}
