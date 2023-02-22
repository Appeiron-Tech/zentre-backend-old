import { Schema } from 'mongoose'

export class ReadCompanyDto {
  _id: Schema.Types.ObjectId
  tenancyName: string
  name: string
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
  style: {
    brightness: string
    primary: string
    onPrimary: string
    secondary: string
    onSecondary: string
    error: string
    onError: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
  }
}
