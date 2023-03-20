import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICompany } from '../interfaces/company.interface'
import { ICompanyApp } from '../interfaces/companyApp.interface'

export type CompanyDocument = HydratedDocument<Company>

@Schema({ timestamps: true })
export class Company implements ICompany {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'HubCompany' })
  hubCompanyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 32, required: true, unique: true })
  tenancyName: string

  @Prop({ type: String, maxLength: 128 })
  officialName: string

  @Prop({ type: String, maxLength: 3 })
  country: string

  @Prop({ type: String, maxLength: 16, required: true })
  businessType: string

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
