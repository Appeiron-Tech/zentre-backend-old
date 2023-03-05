import { Schema } from 'mongoose'

export interface IContact {
  _id: Schema.Types.ObjectId
  store: Schema.Types.ObjectId
  userName: string
  contactType: number
  contact: string
  message: string
  createdAt: number
}
