import { Schema } from 'mongoose'

export interface IContact {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  storeId: Schema.Types.ObjectId
  userName: string
  contactType: number
  contact: string
  message: string
  createdAt: Date
}
