import { Schema } from 'mongoose'

export interface IVariation {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  icon: string
  name: string
  updatedAt: Date
  createdAt: Date
}
