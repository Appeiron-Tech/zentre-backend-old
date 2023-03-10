// https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#product-properties
import { Schema } from 'mongoose'
import { IImage } from './image.interface'
export interface IProduct {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  name: string
  type: string
  status: string
  description: string
  shortDescription: string
  sku: string
  price: number
  onSaleFrom: Date
  onSaleTo: Date
  salePrice: number
  purchasable: boolean
  totalSales: number
  virtual: boolean
  downloadable: boolean
  externalUrl: string
  manageStock: boolean
  stock: number
  stockStatus: string
  dimensions: {
    weight: number
    length: number
    width: number
    height: number
  }
  shippingPrice: number
  reviewsAllowed: boolean
  averageRating: number
  ratingCount: number
  purchaseNote: string
  menuOrder: number
  productVariations?: Schema.Types.ObjectId[]
  categories?: Schema.Types.ObjectId[]
  crossProducts?: Schema.Types.ObjectId[]
  images?: IImage[]
  updatedAt: Date
  createdAt: Date
}
