import { Schema } from 'mongoose'

export interface HubSurvey {
  _id: Schema.Types.ObjectId
  store: Schema.Types.ObjectId
  rate: number
  comment?: string
  createdAt: number
}
