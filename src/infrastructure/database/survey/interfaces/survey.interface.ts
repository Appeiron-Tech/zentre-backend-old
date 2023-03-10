import { Schema } from 'mongoose'

export interface ISurvey {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  storeId: Schema.Types.ObjectId
  rate?: number
  comment?: string
  createdAt: Date
}
