import { Module } from '@nestjs/common'
import { CommerceService } from './commerce.service'
import { CommerceController } from './commerce.controller'
import { CommerceModule as DNCommerceModule } from 'src/domain/commerce/commerce.module'
import { CommerceService as DNCommerceService } from 'src/domain/commerce/commerce.service'

@Module({
  imports: [DNCommerceModule],
  providers: [CommerceService, DNCommerceService],
  controllers: [CommerceController],
})
export class CommerceModule {}
