import { ICompanyApp } from '../interfaces/companyApp.interface'

export class UpdateCompanyDto {
  tenancyName?: string
  name?: string
  officialName?: string
  country?: string
  businessType?: string
  currencyName?: string
  currencySymbol?: string
  ga_email_analytics?: string
  ga_view_id?: string
  ga_api_key?: string
  apps?: ICompanyApp[]
}
