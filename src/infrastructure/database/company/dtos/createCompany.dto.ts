import { ICompanyApp } from '../interfaces/companyApp.interface'

export interface CreateCompanyDto {
  tenancyName: string
  name: string
  country?: string
  currencyName: string
  currencySymbol: string
  apps: ICompanyApp[]
  description?: string
  businessType?: string
  logo?: string
  cover?: string
  sns?: any[]
  //   answers: ClientAnswer[]
}
