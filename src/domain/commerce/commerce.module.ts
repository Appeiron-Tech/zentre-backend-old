import { Module } from '@nestjs/common'
import { ProductModule as DBProductModule } from 'src/infrastructure/database/product/product.module'
import { ProductService as DBProductService } from 'src/infrastructure/database/product/product.service'
import { CommerceService } from './commerce.service'

@Module({
  imports: [DBProductModule],
  providers: [CommerceService, DBProductService],
  exports: [CommerceService, DBProductService],
})
export class CommerceModule {}
