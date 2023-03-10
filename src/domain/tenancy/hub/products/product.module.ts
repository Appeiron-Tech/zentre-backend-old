import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductService as DBProductService } from 'src/infrastructure/database/product/product.service'
import { ProductModule as DBProductModule } from 'src/infrastructure/database/product/product.module'

@Module({
  imports: [DBProductModule],
  providers: [ProductService, DBProductService],
  exports: [ProductService, DBProductService],
})
export class ProductModule {}
