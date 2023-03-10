import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { ProductVariation, ProductVariationDocument } from './schemas/productVariation.schema'
import { Variation, VariationDocument } from './schemas/variation.schema'
import { VariationOption, VariationOptionDocument } from './schemas/variationOption.schema'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(ProductVariation.name)
    private productVariationModel: Model<ProductVariationDocument>,
    @InjectModel(Variation.name) private variationModel: Model<VariationDocument>,
    @InjectModel(VariationOption.name) private variationOptionModel: Model<VariationOptionDocument>,
  ) {}

  async findProducts(productQuery: FilterQuery<Product>, populate?: boolean): Promise<any> {
    if (!populate) {
      return await this.productModel.find(productQuery).exec()
    }
    return await this.productModel
      .find(productQuery)
      .populate({ path: 'productVariations', model: 'ProductVariation' })
      .populate({ path: 'categories', model: 'Category' })
      .exec()
  }

  async findProductVariation(productVariationQuery: FilterQuery<ProductVariation>): Promise<any> {
    return await this.productVariationModel.find(productVariationQuery).exec()
  }

  async findVariation(variationQuery: FilterQuery<Variation>): Promise<any> {
    return await this.variationModel.find(variationQuery).exec()
  }

  async findVariationOption(variationOption: FilterQuery<VariationOption>): Promise<any> {
    return await this.variationOptionModel.find(variationOption).exec()
  }
}
