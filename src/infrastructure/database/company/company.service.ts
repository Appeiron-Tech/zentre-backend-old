import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { ICompanySn } from './interfaces/companySn.interface'
import { CreateCompanyDto } from './dtos/createCompany.dto'
import { CreateSNDto } from './dtos/createSN.dto'
import { ReadCompanyDto } from './dtos/readCompany.dto'
import { UpdateSNDto } from './dtos/updateSN.dto'
import { Company, CompanyDocument } from './schemas/company.schema'
import { CompanySn, CompanySnDocument } from './schemas/companySn.schema'
import { UpdateCompanyDto } from './dtos/updateCompany.dto'
import { ObjectId } from 'mongodb'

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
    @InjectModel(CompanySn.name) private snModel: Model<CompanySnDocument>,
  ) {}

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

  async findSns(companySnsQuery: FilterQuery<CompanySn>): Promise<any> {
    return await this.snModel.find(companySnsQuery).exec()
  }

  async createSNs(sn: CreateSNDto): Promise<ICompanySn> {
    return await this.snModel.create(sn)
  }

  async updateSNs(sn: UpdateSNDto): Promise<ICompanySn> {
    return await this.snModel.findOneAndUpdate(sn)
  }
}
