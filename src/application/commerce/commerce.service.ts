import { Injectable } from '@nestjs/common'
import { CommerceService as DNCommerceService } from 'src/domain/commerce/commerce.service'

@Injectable()
export class CommerceService {
  constructor(private dnCommerceService: DNCommerceService) {}

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Product  ********************************** //
  async getProducts(params: { companyId: string; populate?: boolean }): Promise<any> {
    try {
      return await this.dnCommerceService.getProducts({ ...params })
    } catch (error) {
      throw error
    }
  }
}
