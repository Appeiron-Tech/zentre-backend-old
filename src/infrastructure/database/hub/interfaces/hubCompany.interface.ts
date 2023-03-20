import { Schema } from 'mongoose'
import { ICompanyStyle } from './companyStyle.interface'

export interface IHubCompany {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  name: string
  description: string
  logo: string
  cover: string
  style: ICompanyStyle
  sns: any[]
  updatedAt: Date
  createdAt: Date
}
