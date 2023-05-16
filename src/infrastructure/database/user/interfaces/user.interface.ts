import { Schema } from 'mongoose'

export interface IUser {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  name: string
  gAccessToken: string
  gClient: Schema.Types.Mixed
  languageCode: string
  gDisplayName: string
  gEmail: string
  emailVerified: boolean
  gPhoneNumber: string
  gMetadata: Schema.Types.Mixed
  gPhotoUrl: string
  gProviderId: string
  gUID: string
  gValidSince: number
  gStsTokenManager: Schema.Types.Mixed
  lastLogin: Date
  phone: string
  photoUrl: string
  updatedAt: Date
  createdAt: Date
}
