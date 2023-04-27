import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IStore } from '../dtos/interfaces/store.interface'
import { IOpeningHour } from '../dtos/interfaces/openingHour.interface'
import { IStorePhone } from '../dtos/interfaces/storePhone.interface'

export type StoreDocument = HydratedDocument<Store>

@Schema({ timestamps: true })
export class Store implements IStore {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 64, required: true })
  name: string

  @Prop({ type: String, maxLength: 1028 })
  description?: string

  @Prop({ type: String, maxLength: 1028 })
  address: string

  @Prop({ type: String, maxLength: 512 })
  logo: string

  @Prop({ type: String, maxLength: 512 })
  cover: string

  @Prop({ type: Boolean, required: true, default: false })
  isMain: boolean

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: { type: [Number] },
  })
  location: any

  @Prop({ type: Number })
  cityId?: number

  @Prop({ type: Boolean, nullable: false, default: false })
  isOpenAlways: boolean

  @Prop({ type: MongooseSchema.Types.Mixed, nullable: false })
  phones?: IStorePhone[]

  @Prop({ type: MongooseSchema.Types.Mixed, nullable: false })
  openingHours?: IOpeningHour[]

  @Prop({ type: Boolean, nullable: false, default: false })
  isActive: boolean

  @Prop({ type: Date })
  updatedAt: Date

  @Prop({ type: Date })
  createdAt: Date
}

export const StoreSchema = SchemaFactory.createForClass(Store)
