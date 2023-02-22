import { Controller, Get } from '@nestjs/common'
import { HubService } from './hub.service'

@Controller('hub')
export class HubController {
  constructor(private hubService: HubService) {}

  @Get('/company')
  async getCompany(): Promise<any> {
    try {
      const company = await this.hubService.getCompany({ tenancyName: 'dev' })
      return company
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/companySns')
  async getCompanySns(): Promise<any> {
    try {
      const sns = await this.hubService.getCompanySns({ companyId: '63c700411aa173942ca540ab' })
      return sns
    } catch (e) {
      console.error(e)
    }
  }
}
