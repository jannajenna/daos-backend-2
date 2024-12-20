import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
//import { User } from '../../user/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Ensemble {
  //name
  @Prop({
    //required: true,
    trim: true,
  })
  name: string;

  //description
  @Prop({
    trim: true,
  })
  description: string;

  //photo

  //userId

  //postsId
}

export type EnsembleDocument = HydratedDocument<Ensemble>;
export const UserSchema = SchemaFactory.createForClass(Ensemble);
