import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Survey, SurveyDocument } from './schemas/survey.schema'

@Injectable()
export class SurveyService {
  constructor(@InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>) {}

  async findSurvey(surveyQuery: FilterQuery<Survey>): Promise<any> {
    return await this.surveyModel.find(surveyQuery).exec()
  }
}
