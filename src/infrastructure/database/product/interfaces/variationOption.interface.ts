import { Schema } from 'mongoose'

export interface IVariationOption {
  _id: Schema.Types.ObjectId
  variationId: Schema.Types.ObjectId
  name: string
  updatedAt: Date
  createdAt: Date
}
