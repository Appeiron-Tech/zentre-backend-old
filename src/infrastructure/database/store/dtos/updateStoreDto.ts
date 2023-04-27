import { IsArray, IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator'
import { IStorePhone } from './interfaces/storePhone.interface'
import { IOpeningHour } from './interfaces/openingHour.interface'

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
