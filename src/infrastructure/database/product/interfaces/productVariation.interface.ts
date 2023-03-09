// https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#product-properties
import { Schema } from 'mongoose'
import { IImage } from './image.interface'

export interface IProductVariation {
  _id: Schema.Types.ObjectId
  companyId: Schema.Types.ObjectId
  productId: Schema.Types.ObjectId
  name: string
  description: string
  sku: string
  price: number
  salePrice: number
  onSaleFrom: Date
  onSaleTo: Date
  status: string
  purchasable: boolean
  manageStock: boolean
  totalSales: number
  stock: number
  stockStatus: string
  dimensions: {
    weight: number
    length: number
    width: number
    height: number
  }
  menuOrder: number
  variationOptions?: Schema.Types.ObjectId[]
  images?: IImage[]
  updatedAt: Date
  createdAt: Date
}
