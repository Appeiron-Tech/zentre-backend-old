import { Module } from '@nestjs/common'
import { HomeController } from './home.controller'
import { HomeService } from './home.service'
import { AnnouncementModule as DBAnnouncementModule } from 'src/infrastructure/database/announcement/announcement.module'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { HubModule as DBHubModule } from 'src/infrastructure/database/hub/hub.module'
import { HubService as DBHubService } from 'src/infrastructure/database/hub/hub.service'

@Module({
  imports: [DBHubModule, DBAnnouncementModule],
  controllers: [HomeController],
  providers: [HomeService, DBHubService, DBAnnouncementService],
})
export class HomeModule {}
