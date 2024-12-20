import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true }) // Automatically adds `createdAt` and `updatedAt`
export class Post {
  // title
  @Prop({
    //required: true,
    trim: true,
  })
  title: string;

  //description
  @Prop({
    //required: true,
    //minLength: 50,
    //maxLength: 200,
    trim: true,
  })
  description: string;

  //instrument
  @Prop({
    //required: true,
    trim: true,
  })
  instrument: string;

  //ensembleId
  //@Prop({ type: Types.ObjectId, ref: 'Ensemble', required: true })
  //ensembleId: Types.ObjectId; // The ensemble this post belongs to
}

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
