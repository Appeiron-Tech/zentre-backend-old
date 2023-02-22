import { Module } from '@nestjs/common'
import { CompanyModule } from 'src/infrastructure/database/company/company.module'
import { CompanyService } from 'src/infrastructure/database/company/company.service'
import { HomeService } from './home.service'

@Module({
  imports: [CompanyModule],
  providers: [HomeService, CompanyService],
  exports: [HomeService, CompanyService],
})
export class HomeModule {}
