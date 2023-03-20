import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IHubCompanySn } from '../interfaces/companySn.interface'

export type HubCompanySnDocument = HydratedDocument<HubCompanySn>

@Schema({ collection: 'hubCompanySns' })
export class HubCompanySn implements IHubCompanySn {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 4, required: true, unique: true })
  code: string

  @Prop({ type: String })
  url: string

  @Prop({ type: Boolean, default: false })
  active: boolean
}

export const HubCompanySnSchema = SchemaFactory.createForClass(HubCompanySn)
