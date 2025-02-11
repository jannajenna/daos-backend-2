import { IsString, IsMongoId } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  instrument: string;

  //Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
  @IsMongoId()
  ensembleId: string;

  @IsMongoId()
  userId: string;
}
