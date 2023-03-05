import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AnnouncementService as AnnouncementService } from './announcement.service'
import { Announcement, AnnouncementSchema } from './schemas/announcement.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Announcement.name, schema: AnnouncementSchema }])],
  providers: [AnnouncementService],
  exports: [AnnouncementService, MongooseModule],
})
export class AnnouncementModule {}
