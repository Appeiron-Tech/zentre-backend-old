// https://tkssharma.com/nestjs-playing-with-query-param-dto/

import { IsBooleanString, IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator'
import { Schema } from 'mongoose'

enum ScreenCode {
  HOME = 'HOME',
  WELC = 'WELC',
}

export class QueryAnnouncementDto {
  _id: any

  @IsOptional()
  @IsMongoId()
  companyId?: Schema.Types.ObjectId

  @IsOptional()
  @IsEnum(ScreenCode)
  screenCode?: string

  @IsOptional()
  @IsString()
  app?: string

  @IsOptional()
  @IsBooleanString()
  isActive?: boolean
}
