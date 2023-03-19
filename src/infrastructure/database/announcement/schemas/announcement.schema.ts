import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IAnnouncement } from '../interface/announcement.interface'

export type AnnouncementDocument = HydratedDocument<Announcement>

@Schema({ timestamps: true })
export class Announcement implements IAnnouncement {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 4 })
  screen?: string

  @Prop({ type: String, maxLength: 4 })
  app?: string

  @Prop({ type: String, maxLength: 64 })
  title?: string

  @Prop({ type: String, maxLength: 256 })
  description?: string

  @Prop({ type: String })
  url?: string

  @Prop({ type: String, maxLength: 6 })
  color?: string

  @Prop({ type: Date })
  initAt?: Date

  @Prop({ type: Date })
  finishAt?: Date

  @Prop({ type: Boolean, required: true, default: false })
  isActive: boolean

  @Prop({ type: Date })
  createdAt: Date

  @Prop({ type: Date })
  updatedAt: Date
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement)
