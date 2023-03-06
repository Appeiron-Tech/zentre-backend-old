import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ContactService } from './contact.service'
import { Contact, ContactSchema } from './schemas/contact.schema'
import { Survey, SurveySchema } from './schemas/survey.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contact.name, schema: ContactSchema },
      { name: Survey.name, schema: SurveySchema },
    ]),
  ],
  providers: [ContactService],
  exports: [ContactService, MongooseModule],
})
export class ContactModule {}
