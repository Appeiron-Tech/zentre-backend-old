import { ICompanyStyle } from '../../hub/interfaces/companyStyle.interface'

export class UpdateHubCompanyDto {
  name?: string
  description?: string
  logo?: string
  cover?: string
  style?: ICompanyStyle
  sns?: any[]
}
