import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICompany } from '../interfaces/company.interface'
import { ICompanyApp } from '../interfaces/companyApp.interface'
import { ICompanyStyle } from '../interfaces/companyStyle.interface'

export type CompanyDocument = HydratedDocument<Company>

@Schema({ timestamps: true })
export class Company implements ICompany {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 32, required: true, unique: true })
  tenancyName: string

  @Prop({ type: String, maxLength: 64, required: true })
  name: string

  @Prop({ type: String, maxLength: 1028 })
  description: string

  @Prop({ type: String, maxLength: 16, required: true })
  businessType: string

  @Prop({ type: String, maxLength: 512 })
  logo: string

  @Prop({ type: String, maxLength: 512 })
  cover: string

  @Prop({ type: String, maxLength: 512 })
  favicon: string

  @Prop({ type: String, maxLength: 3 })
  currencyName: string

  @Prop({ type: String, maxLength: 3 })
  currencySymbol: string

  @Prop({ type: String })
  ga_email_analytics: string

  @Prop({ type: String })
  ga_view_id: string

  @Prop({ type: String })
  ga_api_key: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  style: ICompanyStyle

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'CompanySn' }] })
  sns: MongooseSchema.Types.ObjectId[]

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  apps: ICompanyApp[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date

  // @Prop({ length: 6, nullable: true })
  // answers: ClientAnswer[]
}

export const CompanySchema = SchemaFactory.createForClass(Company)
