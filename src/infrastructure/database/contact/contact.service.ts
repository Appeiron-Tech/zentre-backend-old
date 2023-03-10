import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Contact, ContactDocument } from './schemas/contact.schema'

@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

  async findContact(contactQuery: FilterQuery<Contact>): Promise<any> {
    return await this.contactModel.find(contactQuery).exec()
  }
}
