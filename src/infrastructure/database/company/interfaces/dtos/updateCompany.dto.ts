import { ICompanyApp } from '../companyApp.interface'
import { ICompanyStyle } from '../companyStyle.interface'

export class UpdCompanyDto {
  tenancyName?: string
  name?: string
  officialName?: string
  country?: string
  description?: string
  businessType?: string
  logo?: string
  cover?: string
  currencyName?: string
  currencySymbol?: string
  ga_email_analytics?: string
  ga_view_id?: string
  ga_api_key?: string
  style?: ICompanyStyle
  sns?: any[]
  apps?: ICompanyApp[]
}
