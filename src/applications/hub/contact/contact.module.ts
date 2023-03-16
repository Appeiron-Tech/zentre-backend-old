import { Module } from '@nestjs/common'
import { ContactService } from './contact.service'
import { ContactController } from './contact.controller'
import { ContactModule as DBContactModule } from 'src/infrastructure/database/contact/contact.module'
import { ContactService as DBContactService } from 'src/infrastructure/database/contact/contact.service'
import { SurveyService as DBSurveyService } from 'src/infrastructure/database/survey/survey.service'
import { SurveyModule as DBSurveyModule } from 'src/infrastructure/database/survey/survey.module'

@Module({
  imports: [DBContactModule, DBSurveyModule],
  providers: [ContactService, DBContactService, DBSurveyService],
  controllers: [ContactController],
})
export class ContactModule {}
