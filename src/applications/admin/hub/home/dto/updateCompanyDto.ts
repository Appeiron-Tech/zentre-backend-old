import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator'

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsUrl()
  logo: string

  @IsOptional()
  @IsUrl()
  cover: string

  @IsOptional()
  @IsArray()
  sns: any[]
}
