import { IsBoolean, IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator'
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
  app?: string

  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}
