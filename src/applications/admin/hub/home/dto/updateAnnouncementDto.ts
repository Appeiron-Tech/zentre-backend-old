import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator'

export class UpdateAnnouncementDto {
  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  url?: string

  @IsOptional()
  @IsString()
  color?: string

  @IsOptional()
  @IsDateString()
  initAt?: Date

  @IsOptional()
  @IsDateString()
  finishAt?: Date

  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}
