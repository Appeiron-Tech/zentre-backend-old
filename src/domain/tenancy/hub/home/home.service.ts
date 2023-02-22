import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/application/shared/utils/jsonUtils'
import { CompanyService as DBCompanyService } from 'src/infrastructure/database/company/company.service'

@Injectable()
export class HomeService {
  constructor(private dbCompanyService: DBCompanyService) {}

  async getCompany(params: { id?: string; tenancyName?: string }): Promise<any> {
    const { id, tenancyName } = params
    try {
      return await this.dbCompanyService.findCompany({ tenancyName })
    } catch (error) {
      throw error
    }
  }

  async getCompanySn(params: { companyId: string; code?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbCompanyService.findCompanySns({ ...params })
    } catch (error) {
      throw error
    }
  }
}
