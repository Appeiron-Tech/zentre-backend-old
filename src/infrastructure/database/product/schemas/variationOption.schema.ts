import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IVariationOption } from '../interfaces/variationOption.interface'

export type VariationOptionDocument = HydratedDocument<VariationOption>

@Schema({ collection: 'variationOptions', timestamps: true })
export class VariationOption implements IVariationOption {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  variationId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 32, required: true })
  name: string

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const VariationOptionSchema = SchemaFactory.createForClass(VariationOption)
