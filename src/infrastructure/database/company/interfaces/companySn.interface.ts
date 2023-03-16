import { Schema } from 'mongoose'

export interface ICompanySn {
  _id: Schema.Types.ObjectId
  company: Schema.Types.ObjectId
  code: string
  url: string
  active: boolean
}
