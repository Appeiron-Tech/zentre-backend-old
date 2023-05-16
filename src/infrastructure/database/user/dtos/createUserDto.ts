import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator'
import { Schema } from 'mongoose'

export class CreateUserDto {
  @IsString()
  companyId: Schema.Types.ObjectId

  @IsString()
  name: string

  @IsOptional()
  @IsString()
  gAccessToken: string

  @IsOptional()
  @IsString()
  gClient: Schema.Types.Mixed

  @IsOptional()
  @IsString()
  languageCode: string

  @IsOptional()
  @IsString()
  gDisplayName: string

  @IsOptional()
  @IsString()
  gEmail: string

  @IsBoolean()
  emailVerified: boolean

  @IsOptional()
  @IsString()
  gPhoneNumber: string

  @IsOptional()
  @IsObject()
  gMetadata: Schema.Types.Mixed

  @IsOptional()
  @IsUrl()
  gPhotoUrl: string

  @IsOptional()
  @IsString()
  gProviderId: string

  @IsOptional()
  @IsString()
  gUID: string

  @IsOptional()
  @IsNumber()
  gValidSince: number

  @IsOptional()
  @IsObject()
  gStsTokenManager: Schema.Types.Mixed

  @IsDate()
  lastLogin: Date

  @IsOptional()
  @IsPhoneNumber()
  phone: string

  @IsOptional()
  @IsUrl()
  photoUrl: string
}
