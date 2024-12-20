import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
//import { Ensemble } from '../../ensemble/schemas/ensemble.schema';

@Schema({
  timestamps: true,
})
export class User {
  //name
  @Prop({
    //required: true,
    trim: true,
  })
  name: string;

  //surname
  @Prop({
    //required: true,
    trim: true,
  })
  surname: string;

  //password
  @Prop({
    //required: true,
    //match:?,
    //minLength: 4,
    //maxLentgh: 8,
    unique: true,
  })
  password: string;

  //email
  @Prop({
    //required: true,
    unique: true,
  })
  email: string;

  //profile text
  @Prop({
    trim: true,
  })
  profileText: string;

  //post number
  @Prop({
    //required: true,
    min: 4,
    max: 4,
  })
  postNumber: number;

  //city
  @Prop({
    //required: true,
  })
  city: string;

  //telephone
  @Prop({
    //required: true,
  })
  telephone: number;

  //photo

  //instrument
  @Prop({
    trim: true,
  })
  instrument: string;

  //ensambleId
  //@Prop({
  // type: mongoose.Schema.Types.ObjectId,
  // ref: Ensemble.name,
  //default: [],
  //})
  //ensembleId: Ensemble[];
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
