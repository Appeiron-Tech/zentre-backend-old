import { Module } from '@nestjs/common'
import { CompanyModule as DBCompanyModule } from 'src/infrastructure/database/company/company.module'
import { AnnouncementModule as DBAnnouncementModule } from 'src/infrastructure/database/announcement/announcement.module'
import { StoreModule as DBStoreModule } from 'src/infrastructure/database/store/store.module'
import { CompanyService as DBCompanyService } from 'src/infrastructure/database/company/company.service'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { StoreService as DBStoreService } from 'src/infrastructure/database/store/store.service'
import { HomeService } from './home.service'

@Module({
  imports: [DBCompanyModule, DBAnnouncementModule, DBStoreModule],
  providers: [HomeService, DBCompanyService, DBAnnouncementService, DBStoreService],
  exports: [HomeService, DBCompanyService, DBAnnouncementService, DBStoreService],
})
export class HomeModule {}
