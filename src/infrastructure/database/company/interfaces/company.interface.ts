import { Schema } from 'mongoose'
import { ICompanyApp } from '../interfaces/companyApp.interface'
import { ICompanyStyle } from './companyStyle.interface'

export interface ICompany {
  _id: Schema.Types.ObjectId
  tenancyName: string
  name: string
  officialName: string
  description: string
  country: string
  businessType: string
  logo: string
  cover: string
  favicon: string
  currencyName: string
  currencySymbol: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  style: ICompanyStyle
  sns: any[]
  //   answers: ClientAnswer[]
  apps: ICompanyApp[]
  updatedAt: Date
  createdAt: Date
}
