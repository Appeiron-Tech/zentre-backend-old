import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { CreateCompanyDto } from './dtos/createCompany.dto'
import { ReadCompanyDto } from './dtos/readCompany.dto'
import { Company, CompanyDocument } from './schemas/company.schema'
import { UpdateCompanyDto } from './dtos/updateCompany.dto'
import { ObjectId } from 'mongodb'

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

  async findCompany(companyQuery: FilterQuery<Company>): Promise<any> {
    return await this.companyModel.findOne(companyQuery).populate({ path: 'sns' }).exec()
  }

  async createCompany(company: CreateCompanyDto): Promise<ReadCompanyDto> {
    return await this.companyModel.create(company)
  }

  async updateCompany(id: string, company: UpdateCompanyDto): Promise<ReadCompanyDto> {
    const _id = new ObjectId(id)
    return await this.companyModel.findOneAndUpdate({ _id }, company, { new: true })
  }
}
