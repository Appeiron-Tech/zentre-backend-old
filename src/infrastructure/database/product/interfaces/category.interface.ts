import { Schema } from 'mongoose'

export interface ICategory {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  name: string
  menuOrder: number
  updatedAt: Date
  createdAt: Date
}
