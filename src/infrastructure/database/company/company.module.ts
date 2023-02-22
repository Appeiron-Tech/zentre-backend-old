import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CompanyService } from './company.service'
import { Company, CompanySchema } from './schemas/company.schema'
import { CompanySn, CompanySnSchema } from './schemas/companySn.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: CompanySn.name, schema: CompanySnSchema },
    ]),
  ],
  providers: [CompanyService],
  exports: [CompanyService, MongooseModule],
})
export class CompanyModule {}
