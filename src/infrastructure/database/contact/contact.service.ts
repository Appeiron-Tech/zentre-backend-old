import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Contact, ContactDocument } from './schemas/contact.schema'
import { Survey, SurveyDocument } from './schemas/survey.schema'

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
  ) {}

  async findContact(contactQuery: FilterQuery<Contact>): Promise<any> {
    return await this.contactModel.find(contactQuery).exec()
  }

  async findSurvey(surveyQuery: FilterQuery<Survey>): Promise<any> {
    return await this.surveyModel.find(surveyQuery).exec()
  }
}
