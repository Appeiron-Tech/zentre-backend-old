import { Injectable } from '@nestjs/common'
import { HomeService as DNHomeService } from 'src/domain/tenancy/hub/home/home.service'

@Injectable()
export class HubService {
  constructor(private dnHomeService: DNHomeService) {}

  async getCompany(params: { tenancyName: string }): Promise<any> {
    try {
      return await this.dnHomeService.getCompany({ tenancyName: params.tenancyName })
    } catch (error) {
      throw error
    }
  }

  async getCompanySns(params: { companyId: string; code?: string }): Promise<any> {
    const { companyId, code } = params
    try {
      return await this.dnHomeService.getCompanySn({ companyId: companyId, code: code })
    } catch (error) {
      throw error
    }
  }
}
