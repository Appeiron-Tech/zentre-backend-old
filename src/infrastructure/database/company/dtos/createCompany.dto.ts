import { ICompanyApp } from '../interfaces/companyApp.interface'

export interface CreateCompanyDto {
  tenancyName: string
  name: string
  country?: string
  currencyName: string
  currencySymbol: string
  apps: ICompanyApp[]
  businessType?: string
  //   answers: ClientAnswer[]
}
