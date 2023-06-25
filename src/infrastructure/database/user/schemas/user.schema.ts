import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import { IGUser } from '../interfaces/gUser.interface'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User implements IUser {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxlength: 64 })
  name: string

  @Prop({ type: String, maxlength: 64 })
  email: string

  @Prop({ type: String, maxlength: 6 })
  languageCode: string

  @Prop({ type: Boolean, default: false })
  emailVerified: boolean

  @Prop({ type: MongooseSchema.Types.Mixed })
  googleUser: IGUser

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
