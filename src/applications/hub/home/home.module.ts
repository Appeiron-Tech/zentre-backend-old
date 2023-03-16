import { Module } from '@nestjs/common'
import { HomeController } from './home.controller'
import { HomeService } from './home.service'
import { CompanyModule as DBCompanyModule } from 'src/infrastructure/database/company/company.module'
import { AnnouncementModule as DBAnnouncementModule } from 'src/infrastructure/database/announcement/announcement.module'
import { CompanyService as DBCompanyService } from 'src/infrastructure/database/company/company.service'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'

@Module({
  imports: [DBCompanyModule, DBAnnouncementModule],
  controllers: [HomeController],
  providers: [HomeService, DBCompanyService, DBAnnouncementService],
})
export class HomeModule {}
