import { Exclude, Expose } from 'class-transformer'
import { Schema } from 'mongoose'
import { IStorePhone } from './interfaces/storePhone.interface'
import { IOpeningHour } from './interfaces/openingHour.interface'

@Exclude()
export class StoreHomeDto {
  @Expose()
  _id: Schema.Types.ObjectId

  @Expose()
  name: string

  @Expose()
  description?: string

  @Expose()
  address: string

  @Expose()
  isMain: boolean

  @Expose()
  cityId?: number

  @Expose()
  isOpenAlways: boolean

  @Expose()
  phones?: IStorePhone[]

  @Expose()
  openingHours?: IOpeningHour[]
}
