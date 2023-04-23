import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { AnnouncementService as DBAnnouncementService } from 'src/infrastructure/database/announcement/announcement.service'
import { HubService as DBHubService } from 'src/infrastructure/database/hub/hub.service'
import { StoreService as DBStoreService } from 'src/infrastructure/database/store/store.service'

@Injectable()
export class HomeService {
  constructor(
    private dbHubService: DBHubService,
    private dbAnnouncementService: DBAnnouncementService,
    private dbStoreService: DBStoreService,
  ) {}

  async getCompany(params: { id?: string; tenancyName?: string }): Promise<any> {
    try {
      return await this.dbHubService.findCompany({ id: params.id })
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
  async getAnnouncements(params: { company: string; screen?: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbAnnouncementService.findAnnouncements({ ...params })
    } catch (error) {
      throw error
    }
  }

  async getAnnouncement(params: { id: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbAnnouncementService.findAnnouncement({ _id: params.id })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ******************************  Store  ******************************** //
  async getStores(params: { companyId: string; name?: string; isMain?: boolean }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbStoreService.findStore({ ...params, isActive: true })
    } catch (error) {
      throw error
    }
  }
}
