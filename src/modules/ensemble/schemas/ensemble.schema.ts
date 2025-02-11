import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// The @Schema() decorator will mark a class for the schema definition
@Schema({
  timestamps: true,
})
export class Ensemble {
  //The @Prop() decorator defines a property in the document.
  //https://mongoosejs.com/docs/schematypes.html
  //The @Prop() decorator accepts an options object argument
  //https://mongoosejs.com/docs/schematypes.html#schematype-options
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
  @Prop()
  photo: string;
}

export type EnsembleDocument = HydratedDocument<Ensemble>;
// The @SchemaFactory() decorator will generate the schema Mongoose schemas based on TypeScript classes
export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);
