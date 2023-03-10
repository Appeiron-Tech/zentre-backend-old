import { Module } from '@nestjs/common'
import { ContactService } from './contact.service'
import { ContactService as DBContactService } from 'src/infrastructure/database/contact/contact.service'
import { ContactModule as DBContactModule } from 'src/infrastructure/database/contact/contact.module'

@Module({
  imports: [DBContactModule],
  providers: [ContactService, DBContactService],
  exports: [ContactService, DBContactService],
})
export class ContactModule {}
