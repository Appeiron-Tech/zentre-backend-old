import { Schema } from 'mongoose'
import { ICompanyApp } from '../interfaces/companyApp.interface'
import { ICompanyStyle } from '../interfaces/companyStyle.interface'

export class ReadCompanyDto {
  _id: Schema.Types.ObjectId
  tenancyName: string
  name: string
  officialName: string
  country: string
  description: string
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
