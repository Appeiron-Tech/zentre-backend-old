import { Schema } from 'mongoose'

export interface IAnnouncement {
  _id: Schema.Types.ObjectId
  company: Schema.Types.ObjectId
  screenCode?: string
  app?: string
  title?: string
  description?: string
  url?: string
  color?: string
  initAt?: Date
  finishAt?: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
