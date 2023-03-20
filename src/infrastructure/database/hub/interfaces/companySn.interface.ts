import { Schema } from 'mongoose'

export interface IHubCompanySn {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  code: string
  url: string
  active: boolean
}
