import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User implements IUser {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxlength: 64 })
  name: string

  @Prop({ type: String })
  gAccessToken: string

  @Prop({ type: Date })
  gCreatedAt: Date

  @Prop({ type: MongooseSchema.Types.Mixed })
  gClient: MongooseSchema.Types.Mixed

  @Prop({ type: String, maxlength: 6 })
  languageCode: string

  @Prop({ type: String, maxlength: 64 })
  gDisplayName: string

  @Prop({ type: String, maxlength: 64 })
  gEmail: string

  @Prop({ type: Boolean, default: false })
  emailVerified: boolean

  @Prop({ type: String, maxlength: 32 })
  gPhoneNumber: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  gMetadata: MongooseSchema.Types.Mixed

  @Prop({ type: String })
  gPhotoUrl: string

  @Prop({ type: String })
  gProviderId: string

  @Prop({ type: String })
  gUID: string

  @Prop({ type: Number })
  gValidSince: number

  @Prop({ type: MongooseSchema.Types.Mixed })
  gStsTokenManager: MongooseSchema.Types.Mixed

  @Prop({ type: Date, default: Date.now })
  lastLogin: Date

  @Prop({ type: String, maxlength: 32 })
  phone: string

  @Prop({ type: String })
  photoUrl: string

  @Prop({ type: Date })
  updatedAt: Date

  @Prop({ type: Date })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
