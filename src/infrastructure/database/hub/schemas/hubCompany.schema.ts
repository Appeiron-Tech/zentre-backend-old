import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICompanyStyle } from '../../hub/interfaces/companyStyle.interface'
import { IHubCompany } from '../interfaces/hubCompany.interface'

export type HubCompanyDocument = HydratedDocument<HubCompany>

@Schema({ collection: 'hubCompanies', timestamps: true })
export class HubCompany implements IHubCompany {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 64, required: true })
  name: string

  @Prop({ type: String, maxLength: 1028 })
  description: string

  @Prop({ type: String, maxLength: 512 })
  logo: string

  @Prop({ type: String, maxLength: 512 })
  cover: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  style: ICompanyStyle

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'HubCompanySn' }] })
  sns: MongooseSchema.Types.ObjectId[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const HubCompanySchema = SchemaFactory.createForClass(HubCompany)
