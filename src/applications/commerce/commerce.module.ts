import { Module } from '@nestjs/common'
import { CommerceService } from './commerce.service'
import { CommerceController } from './commerce.controller'
import { ProductModule as DBProductModule } from 'src/infrastructure/database/product/product.module'
import { ProductService as DBProductService } from 'src/infrastructure/database/product/product.service'

@Module({
  imports: [DBProductModule],
  providers: [CommerceService, DBProductService],
  controllers: [CommerceController],
})
export class CommerceModule {}
