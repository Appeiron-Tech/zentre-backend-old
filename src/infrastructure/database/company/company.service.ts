import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { InsCompanyDto } from './interfaces/dtos/insertCompany.dto'
import { ReadCompanyDto } from './interfaces/dtos/readCompany.dto'
import { Company, CompanyDocument } from './schemas/company.schema'
import { CompanySn, CompanySnDocument } from './schemas/companySn.schema'

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
    @InjectModel(CompanySn.name) private snModel: Model<CompanySnDocument>,
  ) {}

  async findCompany(companyQuery: FilterQuery<Company>): Promise<any> {
    return await this.companyModel.findOne(companyQuery).populate({ path: 'sns' }).exec()
  }

  async findCompanySns(companySnsQuery: FilterQuery<CompanySn>): Promise<any> {
    return await this.snModel.find(companySnsQuery).exec()
  }

  async insertCompany(company: InsCompanyDto): Promise<ReadCompanyDto> {
    console.log('to save: ')
    console.log(company)
    return await this.companyModel.create(company)
  }
}
