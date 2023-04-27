import { Controller, Get, Param } from '@nestjs/common'
import { HomeService } from './home.service'
import { plainToClass } from 'class-transformer'
import { StoreHomeDto } from './dtos/store.dto'

@Controller('hub/home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get('/company/:id')
  async getCompany(@Param('id') id: string): Promise<any> {
    try {
      const company = await this.homeService.getCompany({ id: id })
      return company
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/companySns/:companyId')
  async getCompanySns(@Param('companyId') companyId: string): Promise<any> {
    try {
      const sns = await this.homeService.getCompanySns({ companyId: companyId })
      return sns
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/announcements/:companyId')
  async getAnnouncements(@Param('companyId') companyId: string): Promise<any> {
    try {
      const announcements = await this.homeService.getAnnouncements({
        company: companyId,
      })
      return announcements
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/announcement/:announcementId')
  async getAnnouncement(@Param('announcementId') announcementId: string): Promise<any> {
    try {
      const announcements = await this.homeService.getAnnouncement({
        id: announcementId,
      })
      return announcements
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/store/:companyId')
  async getStores(@Param('companyId') companyId: string): Promise<any> {
    try {
      const stores = await this.homeService.getStores({ companyId: companyId, isMain: true })
      return plainToClass(StoreHomeDto, stores[0]) //just the first store, by now
    } catch (e) {
      console.error(e)
    }
  }
}
