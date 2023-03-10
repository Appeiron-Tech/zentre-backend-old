import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { IImage } from '../interfaces/image.interface'
import { IProductVariation } from '../interfaces/productVariation.interface'

export type ProductVariationDocument = HydratedDocument<ProductVariation>

@Schema({ collection: 'productVariations', timestamps: true })
export class ProductVariation implements IProductVariation {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  companyId: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId })
  productId: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 128, required: true })
  name: string

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
  manageStock: boolean

  @Prop({ type: Number })
  stock: number

  @Prop({ type: Number, max: 99 })
  menuOrder: number

  @Prop({ type: String, maxLength: 8 })
  stockStatus: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  dimensions: {
    weight: number
    length: number
    width: number
    height: number
  }

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  images?: IImage[]

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'VariationOption' }] })
  variationOptions: MongooseSchema.Types.ObjectId[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const ProductVariationSchema = SchemaFactory.createForClass(ProductVariation)
