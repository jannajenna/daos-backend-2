import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../user/schemas/user.schema';
import { Ensemble } from '../ensemble/schemas/ensemble.schema';

// The @Schema() decorator will mark a class for the schema definition
@Schema({
  timestamps: true,
})
export class Musician {
  //userId
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: User;

  //ensemble
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ensemble',
    required: true,
  })
  ensembleID: Ensemble;

  @Prop({
    required: true,
    //enum: Array, creates a validator that checks if the value is in the given array.
    enum: ['guitarist', 'drummer', 'vocalist', 'bassist'],
  })
  role: string;

  @Prop({ default: Date.now })
  joinedAt: Date;
}

export type MusicianDocument = HydratedDocument<Musician>;
export const MusicianSchema = SchemaFactory.createForClass(Musician);
