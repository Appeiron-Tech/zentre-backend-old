import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ISurvey } from '../interfaces/survey.interface'

export type SurveyDocument = HydratedDocument<Survey>

@Schema()
export class Survey implements ISurvey {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  storeId: MongooseSchema.Types.ObjectId

  @Prop({ type: Number })
  rate?: number

  @Prop({ type: String, maxLength: 4 })
  comment?: string

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const SurveySchema = SchemaFactory.createForClass(Survey)
