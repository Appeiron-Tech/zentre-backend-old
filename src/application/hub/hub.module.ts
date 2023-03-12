import { Module } from '@nestjs/common'
import { HubService } from './hub.service'
import { HubController } from './hub.controller'
import { HomeService as DNHomeService } from 'src/domain/hub/home/home.service'
import { ContactService as DNContactService } from 'src/domain/hub/contact/contact.service'
import { HomeModule as DNHomeModule } from 'src/domain/hub/home/home.module'
import { ContactModule as DNContactModule } from 'src/domain/hub/contact/contact.module'

@Module({
  imports: [DNHomeModule, DNContactModule],
  providers: [HubService, DNHomeService, DNContactService],
  controllers: [HubController],
})
export class HubModule {}
