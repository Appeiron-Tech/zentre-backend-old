import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IVariation } from '../interfaces/variation.interface'

export type VariationDocument = HydratedDocument<Variation>

@Schema({ timestamps: true })
export class Variation implements IVariation {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 64 })
  icon: string

  @Prop({ type: String, maxLength: 32, required: true })
  name: string

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'VariationOption' }] })
  variationOptions?: MongooseSchema.Types.ObjectId[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const VariationSchema = SchemaFactory.createForClass(Variation)
