import { Module } from '@nestjs/common'
import { HubService } from './hub.service'
import { HubController } from './hub.controller'
import { HomeModule } from 'src/domain/hub/home/home.module'
import { HomeService } from 'src/domain/hub/home/home.service'
import { ContactModule } from 'src/domain/hub/contact/contact.module'
import { ContactService } from 'src/domain/hub/contact/contact.service'
import { ProductModule } from 'src/domain/hub/products/product.module'
import { ProductService } from 'src/domain/hub/products/product.service'

@Module({
  imports: [HomeModule, ContactModule, ProductModule],
  providers: [HubService, HomeService, ContactService, ProductService],
  controllers: [HubController],
})
export class HubModule {}
