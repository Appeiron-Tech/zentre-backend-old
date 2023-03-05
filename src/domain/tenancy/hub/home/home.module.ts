import { Module } from '@nestjs/common'
import { AnnouncementModule } from 'src/infrastructure/database/announcement/announcement.module'
import { AnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { CompanyModule } from 'src/infrastructure/database/company/company.module'
import { CompanyService } from 'src/infrastructure/database/company/company.service'
import { HomeService } from './home.service'

@Module({
  imports: [CompanyModule, AnnouncementModule],
  providers: [HomeService, CompanyService, AnnouncementService],
  exports: [HomeService, CompanyService, AnnouncementService],
})
export class HomeModule {}
