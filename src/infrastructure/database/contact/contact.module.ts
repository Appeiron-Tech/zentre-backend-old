import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ContactService } from './contact.service'
import { Contact, ContactSchema } from './schemas/contact.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }])],
  providers: [ContactService],
  exports: [ContactService, MongooseModule],
})
export class ContactModule {}
