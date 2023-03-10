import { Injectable } from '@nestjs/common'
import { HomeService as DNHomeService } from 'src/domain/hub/home/home.service'
import { ContactService as DNContactService } from 'src/domain/hub/contact/contact.service'
import { ProductService as DNProductService } from 'src/domain/hub/products/product.service'

@Injectable()
export class HubService {
  constructor(
    private dnHomeService: DNHomeService,
    private dnContactService: DNContactService,
    private dnProductService: DNProductService,
  ) {}

  async getCompany(params: { tenancyName: string }): Promise<any> {
    try {
      return await this.dnHomeService.getCompany({ tenancyName: params.tenancyName })
    } catch (error) {
      throw error
    }
  }

  async getCompanySns(params: { companyId: string; code?: string }): Promise<any> {
    const { companyId, code } = params
    try {
      return await this.dnHomeService.getCompanySn({ company: companyId, code: code })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Announcement  ********************************** //
  async getAnnouncements(params: { company: string }): Promise<any> {
    const { company } = params
    try {
      return await this.dnHomeService.getAnnouncements({ company: company, screen: 'HOME' })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Contact  ********************************** //
  async getContacts(params: { company: string }): Promise<any> {
    try {
      return await this.dnContactService.getContacts({ ...params })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Store  ********************************** //
  async getStores(params: { company: string; name?: string }): Promise<any> {
    try {
      return await this.dnHomeService.getStores({ ...params })
    } catch (error) {
      throw error
    }
  }

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Product  ********************************** //
  async getProducts(params: { companyId: string; populate?: boolean }): Promise<any> {
    try {
      return await this.dnProductService.getProducts({ ...params })
    } catch (error) {
      throw error
    }
  }
}
