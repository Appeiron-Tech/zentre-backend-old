import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/application/shared/utils/jsonUtils'
import { CompanyService as DBCompanyService } from 'src/infrastructure/database/company/company.service'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'

@Injectable()
export class HomeService {
  constructor(
    private dbCompanyService: DBCompanyService,
    private dbAnnouncementService: DBAnnouncementService,
  ) {}

  async getCompany(params: { id?: string; tenancyName?: string }): Promise<any> {
    // const { id, tenancyName } = params
    const { tenancyName } = params
    try {
      return await this.dbCompanyService.findCompany({ tenancyName })
    } catch (error) {
      throw error
    }
  }

  async getCompanySn(params: { company: string; code?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbCompanyService.findCompanySns({ ...params })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ******************************  Announcement  ******************************** //
  async getAnnouncements(params: { company: string; screen?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbAnnouncementService.findAnnouncements({ ...params })
    } catch (error) {
      throw error
    }
  }
}
