import { Module } from '@nestjs/common'
import { HubService } from './hub.service'
import { HubController } from './hub.controller'
import { HomeModule } from 'src/domain/tenancy/hub/home/home.module'
import { HomeService } from 'src/domain/tenancy/hub/home/home.service'
import { ContactModule } from 'src/domain/tenancy/hub/contact/contact.module'
import { ContactService } from 'src/domain/tenancy/hub/contact/contact.service'

@Module({
  imports: [HomeModule, ContactModule],
  providers: [HubService, HomeService, ContactService],
  controllers: [HubController],
})
export class HubModule {}
