import { Controller, Get } from '@nestjs/common'
import { HomeService } from './home.service'

@Controller('hub/home')
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

  @Get('/companySns')
  async getCompanySns(): Promise<any> {
    try {
      const sns = await this.homeService.getCompanySns({ companyId: '63c700411aa173942ca540ab' })
      return sns
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/announcements')
  async getAnnouncements(): Promise<any> {
    try {
      const announcements = await this.homeService.getAnnouncements({
        company: '63c700411aa173942ca540ab',
      })
      return announcements
    } catch (e) {
      console.error(e)
    }
  }

  // @Get('/contact')
  // async getContacts(): Promise<any> {
  //   try {
  //     const contacts = await this.homeService.getContacts({
  //       company: '63c700411aa173942ca540ab',
  //     })
  //     return contacts
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // @Get('/store')
  // async getStores(): Promise<any> {
  //   try {
  //     const stores = await this.homeService.getStores({
  //       company: '63c700411aa173942ca540ab',
  //       name: 'Miraflores',
  //     })
  //     return stores
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
