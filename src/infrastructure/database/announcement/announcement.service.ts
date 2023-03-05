import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Announcement, AnnouncementDocument } from './schemas/announcement.schema'

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name) private announcementModel: Model<AnnouncementDocument>,
  ) {}

  async findAnnouncements(announcementsQuery: FilterQuery<Announcement>): Promise<any> {
    return await this.announcementModel.find(announcementsQuery).exec()
  }
}
