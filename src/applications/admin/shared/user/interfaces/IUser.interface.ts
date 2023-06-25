import { Schema } from 'mongoose'

export interface IUser {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  name: string
  email: string
  // googleUser: IGUser
  languageCode: string
  emailVerified: boolean
  lastLogin: Date
  phone: string
  photoUrl: string
  updatedAt: Date
  createdAt: Date
}
