import { Injectable } from '@nestjs/common'
import { ProductService as DBProductService } from 'src/infrastructure/database/product/product.service'

@Injectable()
export class CommerceService {
  constructor(private dbProductService: DBProductService) {}

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Product  ********************************** //
  async getProducts(params: { id?: string; companyId?: string }): Promise<any> {
    const { companyId } = params
    try {
      return await this.dbProductService.findProducts({ companyId }, true)
    } catch (error) {
      throw error
    }
  }
}
