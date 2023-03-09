import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductService } from './product.service'
import { Product, ProductSchema } from './schemas/product.schema'
import { ProductVariation, ProductVariationSchema } from './schemas/productVariation.schema'
import { Variation, VariationSchema } from './schemas/variation.schema'
import { VariationOption, VariationOptionSchema } from './schemas/variationOption.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductVariation.name, schema: ProductVariationSchema },
      { name: Variation.name, schema: VariationSchema },
      { name: VariationOption.name, schema: VariationOptionSchema },
    ]),
  ],
  providers: [ProductService],
  exports: [ProductService, MongooseModule],
})
export class ProductModule {}
