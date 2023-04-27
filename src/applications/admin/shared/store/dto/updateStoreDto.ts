import { IsArray, IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator'

export class UpdateStoreDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  address: string

  @IsOptional()
  @IsUrl()
  logo: string

  @IsOptional()
  @IsUrl()
  cover: string

  @IsOptional()
  @IsBoolean()
  isMain: boolean

  @IsOptional()
  @IsBoolean()
  isOpenAlways: boolean

  @IsOptional()
  @IsArray()
  phones: IStorePhone[]

  @IsOptional()
  @IsArray()
  openingHours: IOpeningHour[]

  @IsOptional()
  @IsBoolean()
  isActive: boolean
}

export interface IStorePhone {
  phone: number
  countryCode: number
  isWspMain: boolean
  createdAt: number
}

export interface IOpeningHour {
  weekDay: number
  fromHour: string
  toHour: string
}

export interface OpeningRange {
  from: string
  to: string
}
