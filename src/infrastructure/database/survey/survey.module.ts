import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Survey, SurveySchema } from './schemas/survey.schema'
import { SurveyService } from './survey.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }])],
  providers: [SurveyService],
  exports: [SurveyService, MongooseModule],
})
export class SurveyModule {}
