import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { UpdateCompanyDto } from './dto/updateCompanyDto'
import { UpdateAnnouncementDto } from './dto/updateAnnouncementDto'
import { QueryAnnouncementDto } from './dto/QueryAnnouncementDto'
import { HubService as DBHubService } from 'src/infrastructure/database/hub/hub.service'

@Injectable()
export class HomeService {
  constructor(
    private dbHubService: DBHubService,
    private dbAnnouncementService: DBAnnouncementService,
  ) {}

  async getCompany(id: string): Promise<any> {
    try {
      return await this.dbHubService.findCompany({ _id: id })
    } catch (error) {
      throw error
    }
  }

  async updateCompany(id: string, company: UpdateCompanyDto): Promise<any> {
    try {
      return await this.dbHubService.updateCompany(id, company)
    } catch (error) {
      throw error
    }
  }

  async getCompanySns(params: { companyId: string; code?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbHubService.findSns({ ...params })
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
