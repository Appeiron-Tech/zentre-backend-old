import { Module } from '@nestjs/common'
import { AnnouncementModule } from 'src/infrastructure/database/announcement/announcement.module'
import { AnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { CompanyModule } from 'src/infrastructure/database/company/company.module'
import { CompanyService } from 'src/infrastructure/database/company/company.service'
import { StoreModule } from 'src/infrastructure/database/store/store.module'
import { StoreService } from 'src/infrastructure/database/store/store.service'
import { HomeService } from './home.service'

@Module({
  imports: [CompanyModule, AnnouncementModule, StoreModule],
  providers: [HomeService, CompanyService, AnnouncementService, StoreService],
  exports: [HomeService, CompanyService, AnnouncementService, StoreService],
})
export class HomeModule {}
