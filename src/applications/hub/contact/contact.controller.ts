import { Controller, Get, Param } from '@nestjs/common'
import { ContactService } from './contact.service'

@Controller('hub/contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get('/contact/:companyId')
  async getCompanySns(@Param('companyId') companyId: string): Promise<any> {
    try {
      const sns = await this.contactService.getContacts({ companyId: companyId })
      return sns
    } catch (e) {
      console.error(e)
    }
  }
}
