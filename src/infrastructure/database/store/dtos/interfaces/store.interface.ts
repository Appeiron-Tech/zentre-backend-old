import { Schema } from 'mongoose'
import { IOpeningHour } from './openingHour.interface'
import { IStorePhone } from './storePhone.interface'

export interface IStore {
  _id: Schema.Types.ObjectId
  name: string
  description?: string
  address: string
  logo: string
  cover: string
  isMain: boolean
  latitude?: number
  longitude?: number
  cityId?: number
  isOpenAlways: boolean
  phones?: IStorePhone[]
  // workers?: StoreWorker[]
  openingHours?: IOpeningHour[]
  isActive: boolean
  updatedAt: Date
  createdAt: Date
}
