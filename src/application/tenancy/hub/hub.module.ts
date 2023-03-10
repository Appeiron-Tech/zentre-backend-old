import { Module } from '@nestjs/common'
import { HubService } from './hub.service'
import { HubController } from './hub.controller'
import { HomeModule } from 'src/domain/tenancy/hub/home/home.module'
import { HomeService } from 'src/domain/tenancy/hub/home/home.service'
import { ContactModule } from 'src/domain/tenancy/hub/contact/contact.module'
import { ContactService } from 'src/domain/tenancy/hub/contact/contact.service'
import { ProductModule } from 'src/domain/tenancy/hub/products/product.module'
import { ProductService } from 'src/domain/tenancy/hub/products/product.service'

@Module({
  imports: [HomeModule, ContactModule, ProductModule],
  providers: [HubService, HomeService, ContactService, ProductService],
  controllers: [HubController],
})
export class HubModule {}
