import { ICompanyApp } from '../companyApp.interface'

export interface InsCompanyDto {
  tenancyName: string
  name: string
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
