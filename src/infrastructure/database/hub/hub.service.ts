import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { IHubCompanySn } from '../hub/interfaces/companySn.interface'
import { CreateSNDto } from './dtos/createSN.dto'
import { UpdateSNDto } from './dtos/updateSN.dto'
import { HubCompanySn, HubCompanySnDocument } from './schemas/hubCompanySn.schema'
import { HubCompany, HubCompanyDocument } from './schemas/hubCompany.schema'
import { UpdateHubCompanyDto } from './dtos/updateHubCompany.dto'
import { ObjectId } from 'mongodb'

@Injectable()
export class HubService {
  constructor(
    @InjectModel(HubCompany.name) private hubCompanyModel: Model<HubCompanyDocument>,
    @InjectModel(HubCompanySn.name) private snModel: Model<HubCompanySnDocument>,
  ) {}

  async findCompany(companyQuery: FilterQuery<HubCompany>): Promise<any> {
    return await this.hubCompanyModel.findOne(companyQuery).populate({ path: 'sns' }).exec()
  }

  async updateCompany(id: string, company: UpdateHubCompanyDto): Promise<IHubCompanySn> {
    const _id = new ObjectId(id)
    return await this.hubCompanyModel.findOneAndUpdate({ _id }, company, { new: true })
  }

  async findSns(companySnsQuery: FilterQuery<HubCompanySn>): Promise<any> {
    return await this.snModel.find(companySnsQuery).exec()
  }

  async createSNs(sn: CreateSNDto): Promise<IHubCompanySn> {
    return await this.snModel.create(sn)
  }

  async updateSNs(sn: UpdateSNDto): Promise<IHubCompanySn> {
    return await this.snModel.findOneAndUpdate(sn)
  }
}
