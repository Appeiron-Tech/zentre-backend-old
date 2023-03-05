import { Schema } from 'mongoose'

export interface ICompanySn {
  _id: Schema.Types.ObjectId
  company: any
  code: string
  url: string
  active: boolean
}
