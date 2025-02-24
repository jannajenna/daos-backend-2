import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
//Haching password
import * as bcrypt from 'bcrypt';

@Schema({
  timestamps: true,
})
export class User {
  //name
  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  //surname
  @Prop({
    required: true,
    trim: true,
  })
  surname: string;

  //email
  @Prop({
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // Regex validation
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  })
  email: string;

  //password
  @Prop({
    required: true,
    //match:?,
    minLength: 4,
    maxLentgh: 20,
  })
  password: string;

  //profile text
  @Prop({
    trim: true,
  })
  profileText?: string;

  //post number
  @Prop({
    required: true,
    //4 digits post
    match: /^[0-9]{4}$/,
  })
  postNumber: string;

  //city
  @Prop({
    required: true,
    trim: true,
  })
  city: string;

  //telephone
  @Prop({
    required: true,
    unique: true,
    //6 digit phone number
    match: /^[0-9]{6}$/,
  })
  telephone: string;

  //photo
  @Prop()
  photo?: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
