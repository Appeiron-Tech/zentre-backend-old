import { Controller, Get, Patch } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
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
        officialName: 'my new official name 7',
        country: undefined,
        description: 'my new description 7',
      }
      const company = removeUndefinedKeys(rawCompany)
      const updatedCompany = await this.homeService.updateCompany(companyId, company)
      return updatedCompany
    } catch (e) {
      console.error(e)
    }
  }
}
