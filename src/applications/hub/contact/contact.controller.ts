import { Controller, Get } from '@nestjs/common'
import { ContactService } from './contact.service'

@Controller('hub/contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get('/contact')
  async getContacts(): Promise<any> {
    try {
      const contacts = await this.contactService.getContacts({
        company: '63c700411aa173942ca540ab',
      })
      return contacts
    } catch (e) {
      console.error(e)
    }
  }
}
