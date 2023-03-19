import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { CompanyService as DBCompanyService } from 'src/infrastructure/database/company/company.service'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { UpdateCompanyDto } from './dto/updateCompanyDto'
import { UpdateAnnouncementDto } from './dto/updateAnnouncementDto'
import { QueryAnnouncementDto } from './dto/QueryAnnouncementDto'

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

  async updateCompany(id: string, company: UpdateCompanyDto): Promise<any> {
    try {
      return await this.dbCompanyService.updateCompany(id, company)
    } catch (error) {
      throw error
    }
  }

  async getCompanySns(params: { companyId: string; code?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbCompanyService.findSns({ ...params })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ******************************  Announcement  ******************************** //
  async getAnnouncement(
    announcementId: string,
    queryAnnouncement: QueryAnnouncementDto,
  ): Promise<any> {
    try {
      if (announcementId) queryAnnouncement._id = announcementId
      return await this.dbAnnouncementService.findAnnouncements(queryAnnouncement)
    } catch (error) {
      throw error
    }
  }

  async updateAnnouncement(
    announcementId: string,
    announcement: UpdateAnnouncementDto,
  ): Promise<any> {
    try {
      return await this.dbAnnouncementService.updateAnnouncement(announcementId, announcement)
    } catch (error) {
      throw error
    }
  }
}
