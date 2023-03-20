// https://tkssharma.com/nestjs-playing-with-query-param-dto/

import { IsBooleanString, IsMongoId, IsOptional } from 'class-validator'
import { Schema } from 'mongoose'

export class QueryStoreDto {
  _id: any

  @IsOptional()
  @IsMongoId()
  companyId?: Schema.Types.ObjectId

  @IsOptional()
  @IsBooleanString()
  isActive?: boolean

  @IsOptional()
  @IsBooleanString()
  isMain?: boolean
}
