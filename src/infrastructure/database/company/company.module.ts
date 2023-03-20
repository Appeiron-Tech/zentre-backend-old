import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CompanyService } from './company.service'
import { Company, CompanySchema } from './schemas/company.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])],
  providers: [CompanyService],
  exports: [CompanyService, MongooseModule],
})
export class CompanyModule {}
