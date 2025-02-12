import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  //email
  @Prop({
    //required: true,
    //unique: true,
    //trim: true,
    //lowercase: true,
    //match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  })
  email: string;

  //password
  @Prop({
    //required: true,
    //match:?,
    //minLength: 4,
    //maxLentgh: 8,
    //lowercase: true,
    //unique: true,
  })
  password: string;

  //profile text
  @Prop({
    trim: true,
  })
  profileText?: string;

  //post number
  @Prop({
    //required: true,
    //match: /^[0-9]{4}$/,
  })
  postNumber: string;

  //city
  @Prop({
    //required: true,
    trim: true,
  })
  city: string;

  //telephone
  @Prop({
    //required: true,
    //unique: true,
    //match: /^[0-9]{6}$/,
  })
  telephone: string;

  //photo
  @Prop()
  photo?: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
