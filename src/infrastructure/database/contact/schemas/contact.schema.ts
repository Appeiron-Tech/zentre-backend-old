import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IContact } from '../interfaces/contact.interface'

export type ContactDocument = HydratedDocument<Contact>

@Schema()
export class Contact implements IContact {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  storeId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 64, required: true })
  userName: string

  @Prop({ type: String, maxLength: 4, required: true })
  contactType: number

  @Prop({ type: String, maxLength: 32 })
  contact: string

  @Prop({ type: String, maxLength: 256, required: true })
  message: string

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const ContactSchema = SchemaFactory.createForClass(Contact)
