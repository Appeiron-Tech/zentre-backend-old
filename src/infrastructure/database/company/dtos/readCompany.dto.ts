import { Schema } from 'mongoose'
import { ICompanyApp } from '../interfaces/companyApp.interface'

export class ReadCompanyDto {
  _id: Schema.Types.ObjectId
  hubCompanyId: Schema.Types.ObjectId
  tenancyName: string
  officialName: string
  country: string
  businessType: string
  favicon: string
  currencyName: string
  currencySymbol: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICompanyApp[]
  updatedAt: Date
  createdAt: Date
}
