import { Module } from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { MusiciansController } from './musicians.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Musician, MusicianSchema } from './schema/musician.shema';
//import { MusicianService } from './musicians.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Musician.name,
        schema: MusicianSchema,
      },
    ]),
  ],
  controllers: [MusiciansController],
  providers: [MusiciansService],
  //exports: [MusicianService],
})
export class MusiciansModule {}
