import { Injectable } from '@nestjs/common'
import { removeUndefinedKeys } from 'src/application/shared/utils/jsonUtils'
import { ContactService as DBContactService } from 'src/infrastructure/database/contact/contact.service'

@Injectable()
export class ContactService {
  constructor(private dbContactService: DBContactService) {}

  // ////////////////////////////////////////////////////////////////////////////// //
  // ********************************  Contact  ********************************** //
  async getContacts(params: { company: string }): Promise<any> {
    params = removeUndefinedKeys(params)
    try {
      return await this.dbContactService.findContact({ ...params })
    } catch (error) {
      throw error
    }
  }
}
