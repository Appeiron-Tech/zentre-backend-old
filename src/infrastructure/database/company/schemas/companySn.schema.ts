import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICompanySn } from '../interfaces/companySn.interface'

export type CompanySnDocument = HydratedDocument<CompanySn>

@Schema({ collection: 'companySns' })
export class CompanySn implements ICompanySn {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Company', required: true })
  company: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 4, required: true, unique: true })
  code: string

  @Prop({ type: String })
  url: string

  @Prop({ type: Boolean, default: false })
  active: boolean
}

export const CompanySnSchema = SchemaFactory.createForClass(CompanySn)
