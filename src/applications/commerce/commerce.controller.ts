import { Controller, Get } from '@nestjs/common'
import { CommerceService } from './commerce.service'

@Controller('commerce')
export class CommerceController {
  constructor(private commerceService: CommerceService) {}
  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Products  ********************************* //
  @Get('/products')
  async getProducts(): Promise<any> {
    try {
      const stores = await this.commerceService.getProducts({
        companyId: '63c700411aa173942ca540ab',
      })
      return stores
    } catch (e) {
      console.error(e)
    }
  }
}
