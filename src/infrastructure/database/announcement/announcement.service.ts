import { ObjectId } from 'mongodb'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Announcement, AnnouncementDocument } from './schemas/announcement.schema'
import { UpdateAnnouncementDto } from './dtos/updateAnnouncementDto'
import { IAnnouncement } from './interface/announcement.interface'

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name) private announcementModel: Model<AnnouncementDocument>,
  ) {}

  async findAnnouncements(announcementsQuery: FilterQuery<Announcement>): Promise<any> {
    return await this.announcementModel.find(announcementsQuery).exec()
  }

  async findAnnouncement(announcementsQuery: FilterQuery<Announcement>): Promise<any> {
    return await this.announcementModel.findOne(announcementsQuery).exec()
  }

  async updateAnnouncement(
    id: string,
    announcement: UpdateAnnouncementDto,
  ): Promise<IAnnouncement> {
    const _id = new ObjectId(id)
    return await this.announcementModel.findOneAndUpdate({ _id }, announcement, { new: true })
  }
}
