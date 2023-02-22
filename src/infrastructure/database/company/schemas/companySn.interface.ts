import { Schema } from 'mongoose'

export interface ICompanySn {
  _id: Schema.Types.ObjectId
  companyId: any
  code: string
  url: string
  active: boolean
}
