import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IImage } from '../interfaces/image.interface'
import { IProduct } from '../interfaces/product.interface'

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product implements IProduct {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 128, required: true })
  name: string

  @Prop({ type: String, maxLength: 16, required: true, default: 'simple' })
  type: string

  @Prop({ type: String, maxLength: 16, required: true, default: 'published' })
  status: string

  @Prop({ type: String, maxLength: 2048 })
  description: string

  @Prop({ type: String, maxLength: 256 })
  shortDescription: string

  @Prop({ type: String, maxLength: 16 })
  sku: string

  @Prop({ type: MongooseSchema.Types.Decimal128 })
  price: number

  @Prop({ type: Date })
  onSaleFrom: Date

  @Prop({ type: Date })
  onSaleTo: Date

  @Prop({ type: MongooseSchema.Types.Decimal128 })
  salePrice: number

  @Prop({ type: Boolean })
  purchasable: boolean

  @Prop({ type: Number })
  totalSales: number

  @Prop({ type: Boolean })
  virtual: boolean

  @Prop({ type: Boolean })
  downloadable: boolean

  @Prop({ type: String })
  externalUrl: string

  @Prop({ type: Boolean })
  manageStock: boolean

  @Prop({ type: Number })
  stock: number

  @Prop({ type: String, maxLength: 8 })
  stockStatus: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  dimensions: {
    weight: number
    length: number
    width: number
    height: number
  }

  @Prop({ type: MongooseSchema.Types.Decimal128 })
  shippingPrice: number

  @Prop({ type: Boolean })
  reviewsAllowed: boolean

  @Prop({ type: MongooseSchema.Types.Decimal128 })
  averageRating: number

  @Prop({ type: MongooseSchema.Types.Decimal128 })
  ratingCount: number

  @Prop({ type: String, maxLength: 512 })
  purchaseNote: string

  @Prop({ type: Number, max: 999 })
  menuOrder: number

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'ProductVariation' }] })
  productVariations?: MongooseSchema.Types.ObjectId[]

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Category' }] })
  categories?: MongooseSchema.Types.ObjectId[]

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId }] })
  crossProducts?: MongooseSchema.Types.ObjectId[]

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  images?: IImage[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)
