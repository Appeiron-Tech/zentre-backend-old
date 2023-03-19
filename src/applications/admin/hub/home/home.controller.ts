import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common'
import { isEmptyObj, removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { QueryAnnouncementDto } from './dto/QueryAnnouncementDto'
import { UpdateAnnouncementDto } from './dto/updateAnnouncementDto'
import { UpdateCompanyDto } from './dto/updateCompanyDto'
import { HomeService } from './home.service'

@Controller('admin/hub/home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get('/company')
  async getCompany(): Promise<any> {
    try {
      const company = await this.homeService.getCompany({ tenancyName: 'dev' })
      return company
    } catch (e) {
      console.error(e)
    }
  }

  @Patch('/company')
  async updateCompany(): Promise<any> {
    try {
      const companyId = '63c700411aa173942ca540ab'
      const rawCompany: UpdateCompanyDto = {
        description: 'my new description 7',
      }
      const company = removeUndefinedKeys(rawCompany)
      const updatedCompany = await this.homeService.updateCompany(companyId, company)
      return updatedCompany
    } catch (e) {
      console.error(e)
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ******************************  Announcement  ******************************** //
  @Get('/announcement/:id?')
  async getAnnouncement(
    @Param('id') announcementId: string,
    @Query() queryAnnouncement: QueryAnnouncementDto,
  ): Promise<any> {
    try {
      if (announcementId || !isEmptyObj(queryAnnouncement)) {
        console.log(queryAnnouncement)
        const announcements = await this.homeService.getAnnouncement(
          announcementId,
          queryAnnouncement,
        )
        return announcements
      }
    } catch (e) {
      console.error(e)
    }
  }

  @Patch('/announcement/:id')
  async updateAnnouncement(
    @Param('id') announcementId: string,
    @Body() announcement: UpdateAnnouncementDto,
  ): Promise<any> {
    try {
      const updatedAnnouncement = await this.homeService.updateAnnouncement(
        announcementId,
        announcement,
      )
      return updatedAnnouncement
    } catch (e) {
      console.error(e)
    }
  }
}
