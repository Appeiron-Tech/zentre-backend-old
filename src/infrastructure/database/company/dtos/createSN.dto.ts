import { Schema } from 'mongoose'

export interface CreateSNDto {
  company: Schema.Types.ObjectId
  code: string
  url: string
  active: boolean
}
