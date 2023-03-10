import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICategory } from '../interfaces/category.interface'

export type CategoryDocument = HydratedDocument<Category>

@Schema({ timestamps: true })
export class Category implements ICategory {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 32, required: true })
  name: string

  @Prop({ type: Number, max: 99, required: true, default: 0 })
  menuOrder: number

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const CategorySchema = SchemaFactory.createForClass(Category)
