import { Module } from '@nestjs/common'
import { ContactModule as DBContactModule } from 'src/infrastructure/database/contact/contact.module'
import { ContactService as DBContactService } from 'src/infrastructure/database/contact/contact.service'
import { SurveyService as DBSurveyService } from 'src/infrastructure/database/survey/survey.service'
import { SurveyModule as DBSurveyModule } from 'src/infrastructure/database/survey/survey.module'
import { ContactService } from './contact.service'

@Module({
  imports: [DBContactModule, DBSurveyModule],
  providers: [ContactService, DBContactService, DBSurveyService],
  exports: [ContactService, DBContactService, DBSurveyService],
})
export class ContactModule {}
