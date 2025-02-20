import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Ensemble } from '../../ensemble/schemas/ensemble.schema';

@Schema({ timestamps: true }) // Automatically adds `createdAt` and `updatedAt`
export class Post {
  // title
  @Prop({
    required: true,
    trim: true,
  })
  title: string;

  //description
  @Prop({
    required: true,
    //minLength: 50,
    //maxLength: 200,
    trim: true,
  })
  description: string;

  //instrument
  @Prop({
    required: true,
    trim: true,
  })
  instrument: string;

  //ensembleId
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ensemble',
    required: true,
  })
  ensembleId: Ensemble;
}

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
